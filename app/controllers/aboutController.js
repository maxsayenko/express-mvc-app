'use strict';

module.exports = function (req, res, next) {
    res.locals = {
        title: 'This is a title',
        message: 'This is a big message'
    };

    res.render('about', {
        layout: 'layouts/layout'
    });
};
