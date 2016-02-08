var request = require('request');
var http = require('http');
var apiKey = require('./ApiKey.js');

var getData = function(cb) {
  var headers = {
    'Authorization': apiKey.auth,
  };

  var options =  {
    url: apiKey.inputUrl,
    method: 'POST',
    headers: headers,
    form:  {
      'pickup_address': '1950 Washington Street, San Francisco, CA 94105',
      'dropoff_address': '611 Mission Street, San Francisco, CA 94105'
    }
  };
  request.post(options, function(err, response,body) {
      console.log("body is in post: ", body);
      
      cb(body)
    });
};

module.exports = {
  getData: getData
};