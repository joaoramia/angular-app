var http = require('http');
var server = http.createServer();

var app = require('./app');

// Any server request will run through the express app
server.on('request', app);

module.exports = server;