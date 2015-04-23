var express = require('express');
var router = express.Router();
var article = require('../models/article');

module.exports = function (app) {
    app.use('/', router);
};

router.get('/', function (req, res, next) {
    var articles = [new article(), new article()];
    var viewModel = {
        title: 'Generator-Express MVC',
        articles: articles
    };

    res.locals = viewModel;
    res.render('index', {
        layout: 'layouts/layout'
    });
});
