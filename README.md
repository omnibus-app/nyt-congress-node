nyt-congress-node
=================
[![NPM](https://nodei.co/npm/nyt-congress-node.png?compact=true)](https://nodei.co/npm/nyt-congress-node/)

[![Build Status](http://img.shields.io/travis/omnibus-app/nyt-congress-node.svg?style=flat
)](https://travis-ci.org/omnibus-app/nyt-congress-node)

Node wrapper for NYT Congress API (bills only, for now)

[API Docs](http://developer.nytimes.com/docs/read/congress_api)

Plan to add methods for all endpoints; currently only supports endpoints listed under Bills.

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

Options passed to each method will be inserted into the relevant endpoint URL scheme based on their key. `billDetails` has the endpoint `http://api.nytimes.com/svc/politics/{version}/us/legislative/congress/{congress-number}/bills/{bill-id}{response-format}`

`version` and `response-format` have defaults, so we don't need to include them. `bill-id` and `congress-number` get inserted into this url. Final request is made to:

`http://api.nytimes.com/svc/politics/v3/us/legislative/congress/113/bills/HR2397.json?api-key={API_KEY}`

All API call methods return promises.

This package works in the browser. To generate a version that will provide a `Congress` browser global, go to the project root and run (assuming you have `browserify` installed globally):

```sh
browserify -s Congress ./ > congress-browser.js
```

Fair warning: the standalone, browserified pacakage is pretty damn big.

## TODO

### Endpoints
- [x] Add Members endpoints
- [x] Add Votes endpoints
- [x] Add Nominees endpoints
- [x] Add Other endpoints

### Environments
- [x] Confirm works in browser

### Misc
- [x] validate params against params.js
- [x] Default to current congress if none specified
- [x] accept camelCase or dash-case for params
- [x] accept number or string for `congress-number`
