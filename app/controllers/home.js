var express = require('express'),
    router = express.Router(),
    Article = require('../models/article');

module.exports = function (app) {
    app.use('/', router);
};

router.get('/', function (req, res, next) {
    var articles = [new Article(), new Article()];
    var viewModel = {
        title: 'Generator-Express MVC',
        articles: articles
    };

    res.locals = viewModel;
    res.render('index', {
        layout: 'layouts/layout'
    });
});
