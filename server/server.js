var express = require('express');
var partials = require('express-partials');
var bodyParser = require('body-parser');
var session = require('express-session');
// var cheerio = require('cheerio');
var http = require('http');
var helpers = require('./helpers.js');

var app = express();

app.use(partials());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname+'/../client'));
app.use(express.static(__dirname+'/../client/bower_components'));

// app.get('/', function(req,res) {
//   res.end('hello world');
// });

// app.get('/favicon.ico', function(req,res) {
//    res.writeHead(200, {'Content-Type': 'image/x-icon'} );
//     res.end();
//     console.log('favicon requested');
//     return;
// });

app.post('/postmates' , function(req,res) {



helpers.getData(req,function(data) {
  console.log("request body looks like: ", req.body);
  res.send({
    data:data,
    end: req.body.endAddress
  });
});

});

app.post('/postmatesDelivery', function(req,res) {

  helpers.makeDelivery(req,function(data) {
    console.log("request body looks like: ", req.body);
  res.send({
    data:data
      });
  });
  
});

app.set('port', (process.env.PORT || 8000));

module.exports = app;


// Utility function that downloads a URL and invokes
// callback with the data.
// function download(url) {
//   http.get(url, function(res) {
//     var data = "";
//     res.on('data', function (chunk) {
//       data += chunk;
//     });
//     res.on("end", function() {
//       console.log(data);
//     });
//   }).on("error", function() {
//     console.log('error');;
//   });
// }

// download('http://www.homelessshelterdirectory.org/cgi-bin/id/cityfoodbanks.cgi?city=San%20Francisco&state=CA');