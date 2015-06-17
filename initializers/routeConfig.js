'use strict'

var express = require('express');
var router = express.Router();

module.exports = function (controllers) {
    router.get('/', controllers.home);
    router.get('/about', controllers.about);

    return router;
};
