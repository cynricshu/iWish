/**
 * Module dependencies.
 */

var express = require('express')
    , routes = require('./routes/route')
    , http = require('http')
    , path = require('path')
    , timer = require( './timer/timer' );

var app = express();

app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'html');
    app.set('title', 'iWish');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser('your secret here'));
    app.use(express.session());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function () {
    app.use(express.errorHandler());
});

app.engine('html', require('ejs').renderFile);
routes.route(app);

timer.checkWishTime( 600000 );

http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});


