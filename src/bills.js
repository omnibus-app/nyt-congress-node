module.exports = {
  billsRecent: "http://api.nytimes.com/svc/politics/{version}/us/legislative/congress/{congress-number}/{chamber}/bills/{bill-type}{response-format}",
  billsByMember: "http://api.nytimes.com/svc/politics/{version}/us/legislative/congress/members/{member-id}/bills/{bill-type}{response-format}",
  billDetails: "http://api.nytimes.com/svc/politics/{version}/us/legislative/congress/{congress-number}/bills/{bill-id}{response-format}",
  billSubjects: "http://api.nytimes.com/svc/politics/{version}/us/legislative/congress/{congress-number}/bills/{bill-id}/subjects{response-format}",
  billAmendments: "http://api.nytimes.com/svc/politics/{version}/us/legislative/congress/{congress-number}/bills/{bill-id}/amendments{response-format}",
  billRelatedBills: "http://api.nytimes.com/svc/politics/{version}/us/legislative/congress/{congress-number}/bills/{bill-id}/related{response-format}",
  billCosponsors: "http://api.nytimes.com/svc/politics/{version}/us/legislative/congress/{congress-number}/bills/{bill-id}/cosponsors{response-format}"
};
