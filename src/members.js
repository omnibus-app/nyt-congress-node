module.exports = {
  memberLists: "http://api.nytimes.com/svc/politics/{version}/us/legislative/congress/{congress-number}/{chamber}/members{response-format}?[optional-params]&",
  memberBioAndRoles: "http://api.nytimes.com/svc/politics/{version}/us/legislative/congress/members/{member-id}{response-format}",
  membersNew: "http://api.nytimes.com/svc/politics/{version}/us/legislative/congress/members/new{response-format}",
  membersCurrentByStateOrDistrict: "http://api.nytimes.com/svc/politics/{version}/us/legislative/congress/members/{chamber}/{state}/{district*}/current{response-format}",
  membersLeavingOffice: "http://api.nytimes.com/svc/politics/{version}/us/legislative/congress/{congress-number}/{chamber}/members/leaving{response-format}",
  memberVotePositions: "http://api.nytimes.com/svc/politics/{version}/us/legislative/congress/members/{member-id}/votes{response-format}",
  memberVoteComparison: "http://api.nytimes.com/svc/politics/{version}/us/legislative/congress/members/{first-member-id}/votes/{second-member-id}/{congress-number}/{chamber}{response-format}",
  memberCosponsoredBills: "http://api.nytimes.com/svc/politics/{version}/us/legislative/congress/members/{member-id}/bills/{type}{response-format}",
  memberSponsorshipComparison: "http://api.nytimes.com/svc/politics/{version}/us/legislative/congress/members/{member-id-1}/bills/{member-id-2}/{congress-number}/{chamber}{response-format}",
  memberFloorAppearances: "http://api.nytimes.com/svc/politics/{version}/us/legislative/congress/members/{member-id}/floor_appearances{response-format}",
};
