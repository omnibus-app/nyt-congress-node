var extend = require( 'extend' );
var request = require( 'request' );
var Promise = require( 'bluebird' );

Promise.promisifyAll( request );

var defaults = {
  'version': 'v3',
  'response-format': '.json'
};

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
  url += ( '?api-key=' + key );
  console.log( url );
  return request.getAsync( url ).then( function ( res ) {
    return res[0].body;
  });
}

var Congress = ( function () {

  function Congress( apiKey ) {
    this._apiKey = apiKey;
  };

  extend( Congress.prototype, {

    billsRecent: function ( opt ) {
      var endpoint = "http://api.nytimes.com/svc/politics/{version}/us/legislative/congress/{congress-number}/{chamber}/bills/{type}{response-format}";
      return apiRequest( endpoint, opt, this._apiKey )
    },

    billsByMember: function ( opt ) {
      var endpoint = "http://api.nytimes.com/svc/politics/{version}/us/legislative/congress/members/{member-id}/bills/{type}{response-format}";
      return apiRequest( endpoint, opt, this._apiKey )
    },

    billDetails: function ( opt ) {
      var endpoint = "http://api.nytimes.com/svc/politics/{version}/us/legislative/congress/{congress-number}/bills/{bill-id}{response-format}";
      return apiRequest( endpoint, opt, this._apiKey )
    },

    billSubjects: function ( opt ) {
      var endpoint = "http://api.nytimes.com/svc/politics/{version}/us/legislative/congress/{congress-number}/bills/{bill-id}/subjects{response-format}";
      return apiRequest( endpoint, opt, this._apiKey )
    },

    billAmendments: function ( opt ) {
      var endpoint = "http://api.nytimes.com/svc/politics/{version}/us/legislative/congress/{congress-number}/bills/{bill-id}/amendments{response-format}";
      return apiRequest( endpoint, opt, this._apiKey )
    },

    billRelatedBills: function ( opt ) {
      var endpoint = "http://api.nytimes.com/svc/politics/{version}/us/legislative/congress/{congress-number}/bills/{bill-id}/related{response-format}";
      return apiRequest( endpoint, opt, this._apiKey )
    },

    billCosponsors: function ( opt ) {
      var endpoint = "http://api.nytimes.com/svc/politics/{version}/us/legislative/congress/{congress-number}/bills/{bill-id}/cosponsors{response-format}";
      return apiRequest( endpoint, opt, this._apiKey )
    }

  });

  return Congress;

})();

module.exports = Congress;
