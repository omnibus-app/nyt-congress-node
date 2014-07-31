module.exports = Object.freeze([
  {
    name: "chamber",
    allowed: ["house", "senate"]
  }, {
    name: "congress-number",
    allowed: [105, 106, 107, 108, 109, 110, 111, 112, 113].map( String )
  }, {
    name: "type",
    allowed: ["introduced", "updated", "passed", "major"]
  }, {
    name: "resource",
    allowed: ["subjects", "amendments", "related"]
  }, {
    name: "bill-id",
    allowed: function ( str ) {
      return /^[a-z0-9]+$/i.test( str );
    }
  }
]);
