'use strict';

var article = require('../models/article');

module.exports = function (req, res, next) {
    var articles = [new article(), new article()];
    var viewModel = {
        title: 'Generator-Express MVC',
        articles: articles
    };

    res.locals = viewModel;
    res.render('index', {
        layout: 'layouts/layout'
    });
};