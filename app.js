var config = require("config");

var express = require('express');
var config = require('./initializers/config');
var app = express();

require('./initializers/express')(app, config);
var port = process.env.PORT || 3000;
app.listen(port);

