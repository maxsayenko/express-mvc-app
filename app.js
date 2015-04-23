

var express = require('express'),
  config = require('./initializers/config');

var app = express();

require('./initializers/express')(app, config);

app.listen(config.port);

