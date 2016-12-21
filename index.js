'use strict';

var express = require('express'),
    path = require('path'),
    app = express();

app.use(express.static(path.join(__dirname, '/')));

app.get('/', function(req, res) {
  res.sendfile('home.html');
});

var server = app.listen(3001, function(){
	console.log('WEG STARTED.');
});