var expressConfig = require('./expressConfig');

module.exports = function (app) {

    //var controllers = glob.sync(rootFolder + '/app/controllers/*.js');
    //controllers.forEach(function (controller) {
    //    require(controller)(app);
    //});

    var controllers = {
        home: require('./../app/controllers/home')
    };

    var routes = require('./routeConfig')(controllers);

    // express configurations
    expressConfig(app, routes);
};
