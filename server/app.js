var path = require('path');
var express = require('express');
var volleyball = require('volleyball');

var app = express();
module.exports = app;

// logging middleware for HTTP requests and responses
app.use(volleyball);

// static resources
var angularPath = path.join(__dirname, '../node_modules/angular');
var publicPath = path.join(__dirname, '../browser');

// If our server gets a request and the url matches something in our browser folder, serve up that file. This also automatically maps `GET /` to `GET /index.html`
app.use(express.static(publicPath));

// If we request the angular source code, serve it up from node_modules
app.use(express.static(angularPath));