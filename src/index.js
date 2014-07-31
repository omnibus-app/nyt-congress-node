var extend = require( 'extend' );
var request = require( 'request' );
var Promise = require( 'bluebird' );

// endpoints
// var bills = require( './bills' );
// // these are empty for now
// var members =
// var votes =
// var nominees =
// var other =

Promise.promisifyAll( request );

var defaults = {
  'version': 'v3',
  'response-format': '.json'
};

var endpoints = extend( {},
  require( './bills' ),
  require( './members' ),
  require( './votes' ),
  require( './nominees' ),
  require( './other' )
);

var interpolate = function ( str, obj ) {
  return str.replace( /{([^{}]*)}/g, function ( a, b ) {
    var r = obj[b];
    return typeof r === 'string' || typeof r === 'number' ? r : a;
  });
};

var apiRequest = function ( endpoint, opt, key ) {
  var params = extend( {}, defaults, opt );
  var qs = { 'api-key': key };
  var url = interpolate( endpoint, params );
  console.log( url );
  return request.getAsync({
    url: url,
    qs: qs
  }).then( function ( res ) {
    return res[0].body;
  });
}

var Congress = ( function () {

  function Congress( apiKey ) {
    this._apiKey = apiKey;
  };

  // build a method for each endpoint.
  Object.keys( endpoints ).forEach( function( name ) {
    Congress.prototype[name] = function ( opt ) {
      return apiRequest( endpoints[name], opt, this._apiKey );
    }
  });

  return Congress;

})();

module.exports = Congress;
