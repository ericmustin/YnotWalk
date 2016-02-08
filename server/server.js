var express = require('express');
var partials = require('express-partials');
var bodyParser = require('body-parser');
var session = require('express-session');
var cheerio = require('cheerio');
var http = require('http');
var helpers = require('./helpers.js');

var app = express();

app.use(partials());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname+'/../client'));

// app.get('/', function(req,res) {
//   res.send('hello world');
// });



app.set('port', (process.env.PORT || 8000));

module.exports = app;

// app.listen(app.get('port'), function() {
//   console.log('server for Node app is running');
// });


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

// download('http://sfbay.craigslist.org/search/zip');