module.exports = {
  votesRollCall: "http://api.nytimes.com/svc/politics/{version}/us/legislative/congress/{congress-number}/{chamber}/sessions/{session-number}/votes/{roll-call-number}{response-format}",
  votesByType: "http://api.nytimes.com/svc/politics/{version}/us/legislative/congress/{congress-number}/{chamber}/votes/{vote-type}{response-format}",
  votesByDate: "http://api.nytimes.com/svc/politics/{version}/us/legislative/congress/{chamber}/votes/{year}/{month}{response-format}",
  votesNominations: "http://api.nytimes.com/svc/politics/{version}/us/legislative/congress/{congress-number}/nominations{response-format}"
};
