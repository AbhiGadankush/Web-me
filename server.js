var express = require("express");
var app = express();
app.use(express.static('public'));
app.use('/assets', express.static(__dirname + '/public/assets')); //To serve static assets
app.use('/api', express.static(__dirname + '/api'));
var server = app.listen(3000, function () {
    var port = server.address().port;})