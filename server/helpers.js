var request = require('request');
var http = require('http');
var apiKey = require('./ApiKey.js');

var getData = function(req,cb) {
  console.log(req.body);
  var startAddress = req.body.startAddress;
  var endAddress = req.body.endAddress;
  var headers = {
    'Authorization': apiKey.auth,
  };

  var options =  {
    url: apiKey.inputUrl,
    method: 'POST',
    headers: headers,
    form:  {
      'pickup_address': startAddress,
      'dropoff_address': endAddress
    }
  };
  request.post(options, function(err, response,body) {      
      cb(body)
    });
};

module.exports = {
  getData: getData
};