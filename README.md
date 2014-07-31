nyt-congress-node
=================

Node wrapper for NYT Congress API (bills only, for now)

[API Docs](http://developer.nytimes.com/docs/read/congress_api)

Plan to add methods for all endpoints; currently only supports endpoints listed under Bills.

## Usage
## Usage

```javascript

  var Congress = require( 'nyt-congress-node' );
  var client = new Congress( API_KEY );

  client.billDetails({
    'bill-id': 'HR2397',
    'congress-number': '113'
  }).then( function ( res ) {
    console.log( res );
  });

```

Options passed to each method will be inserted into the relevant endpoint URL scheme based on their key. `billDetails` has the endpoint `http://api.nytimes.com/svc/politics/{version}/us/legislative/congress/{congress-number}/bills/{bill-id}[.response-format]`

`version` and `response-format` have defaults, so we don't need to include them. `bill-id` and `congress-number` get inserted into this url. Final request is made to:

`http://api.nytimes.com/svc/politics/v3/us/legislative/congress/113/bills/HR2397.json`

## TODO

### Endpoints
- [ ] Add Members endpoints
- [ ] Add Votes endpoints
- [ ] Add Nominees endpoints
- [ ] Add Other endpoints

### Misc
- [ ] validate params against params.js
- [ ] Default to current congress if none specified
- [ ] accept camelCase or dash-case for params
- [ ] accept number or string for `congress-number`
