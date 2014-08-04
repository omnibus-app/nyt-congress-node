var extend = require( 'extend' );
var request = require( 'request' );
var Promise = require( 'es6-promise' ).Promise;

var params = require( './params' );
var urlParams = params.urlParams
var qsParams = params.qsParams

var util = require( './util' );
var interpolate = util.interpolate;
var dasherize = util.dasherize;
var mapKeys = util.mapKeys;

var dasherizeKeys = mapKeys.bind( null, dasherize );

var endpoints = extend( {},
  require( './bills' ),
  require( './members' ),
  require( './votes' ),
  require( './nominees' ),
  require( './other' )
);

var defaults = {
  'version': 'v3',
  'response-format': '.json',
  'congress-number': 113 // current congress
};

var getAsPromise = function ( opt ) {
  return new Promise( function ( resolve, reject ) {
    request( opt, function ( err, resp, body ) {
      if ( err ) {
        reject( err );
      } else {
        resolve( body );
      }
    });
  });
};

// confirms that a parameter hash is valid against params.js
var validateParams = function ( params ) {
  var validity = Object.keys( params ).every( function ( key ) {
    var ok = urlParams[key]( params[key] );
    if ( !ok ) {
      throw new RangeError( params[key] + " is an invalid value for " + key );
    }
    return ok;
  });
};

// separates URI paramaters and querystring parameters into discrete objects.
var generateOpts = function ( opt ) {
  var qs = {};
  var params = {};
  Object.keys( opt ).forEach( function ( key ) {
    if ( urlParams[key] ) {
      params[key] = opt[key];
    } else if ( qsParams[key] ) {
      qs[key] = opt[key];
    }
  });
  return {
    params: params,
    qs: qs
  };
};

var apiRequest = function ( endpoint, key, opt ) {

  var dashedOpt = dasherizeKeys( extend( {}, defaults, opt ) );
  var opts = generateOpts( dashedOpt );
  var params = opts.params;
  var qs = extend( opts.qs, { 'api-key': key } );

  // will throw informative errors if invalid
  validateParams( params );

  var url = interpolate( endpoint, params );

  return getAsPromise({
    url: url,
    qs: qs,
    withCredentials: false
  });

};

var Congress = ( function () {

  function Congress( apiKey ) {
    this._apiKey = apiKey;
  };

  // build a method for each endpoint.
  Object.keys( endpoints ).forEach( function ( name ) {
    Congress.prototype[name] = function ( opt ) {
      return apiRequest( endpoints[name], this._apiKey, opt );
    }
  });

  return Congress;

})();

module.exports = Congress;
