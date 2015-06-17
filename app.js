var express = require('express');
var app = express();

require('./initializers/initialize')(app);
var port = process.env.PORT || 3000;
app.listen(port);

