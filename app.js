var express = require('express');
var app = express();

require('./initializers/express')(app);
var port = process.env.PORT || 3000;
app.listen(port);

