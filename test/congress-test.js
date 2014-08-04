var rewire = require( 'rewire' );
var sinon = require( 'sinon' );
var chai = require( 'chai' );
var expect = require( 'chai' ).expect;
var sinonChai = require( 'sinon-chai' );
var expect = chai.expect;

chai.use( sinonChai );

var Promise = require( 'es6-promise' ).Promise;

var makeRequestStub = function () {
  return sinon.spy( function () {
    return new Promise( function ( resolve, reject ) {
      setTimeout( function () {
        resolve({ key: "value " });
      }, 5 );
    });
  });
};

describe( 'Congress constructor', function () {
  it( 'can be required without exploding', function () {
    expect( function () {
      require( '../' )
    }).to.not.throw();
  });
});

var methods = [ "memberLists", "memberBioAndRoles", "membersNew", "membersCurrentByStateOrDistrict", "membersLeavingOffice", "memberVotePositions", "memberVoteComparison", "memberCosponsoredBills", "memberSponsorshipComparison", "memberFloorAppearances", "billsRecent", "billsByMember", "billDetails", "billSubjects", "billAmendments", "billRelatedBills", "billCosponsors", "nomineeLists", "nomineeDetails", "nomineesByState", "statePartyCounts", "committeeList", "committeeRoster", "chamberSchedule", "votesRollCall", "votesByType", "votesByDate", "votesNominations" ];

describe( 'Congress instance methods', function () {

  var Congress;
  var client;
  var stub;

  beforeEach( function () {
    stub = makeRequestStub();
    Congress = rewire( '../src' );
    Congress.__set__( 'request', stub );
    client = new Congress( 'gibberish' );
  });

  methods.forEach( function ( method ) {
    it( 'Should have a ' + method + ' method.', function () {
      client[method]({});
      expect( stub ).to.have.been.called;
    });

    it( method + ' should return a promise', function () {
      var result = client[method]({});
      expect( result.then ).to.be.a( 'function' );
    })
  });


});
