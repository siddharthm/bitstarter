var express = require('express');

var app = express.createServer(express.logger());

var fs= require('fs');
var bufr=fs.readFileSync("index.html");
var outstr = bufr.toString();

app.get('/', function(request, response) {
  response.send(outstr);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
