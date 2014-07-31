module.exports = {
  statePartyCounts: "http://api.nytimes.com/svc/politics/{version}/us/legislative/congress/states/members/party{response-format}",
  committeeList: "http://api.nytimes.com/svc/politics/{version}/us/legislative/congress/{congress-number}/{chamber}/committees{response-format}",
  committeeRoster: "http://api.nytimes.com/svc/politics/{version}/us/legislative/congress/{congress-number}/{chamber}/committees{committee-id}{response-format}",
  chamberSchedule: "http://api.nytimes.com/svc/politics/{version}/us/legislative/congress/{chamber}/schedule{response-format}"
};
