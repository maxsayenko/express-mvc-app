var expressConfig = require('./expressConfig');

module.exports = function (app) {

    var controllers = {
        home: require('./../app/controllers/homeController'),
        about: require('./../app/controllers/aboutController')
    };

    var routes = require('./routeConfig')(controllers);

    // express configurations
    expressConfig(app, routes);
};
