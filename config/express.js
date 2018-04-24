var express = require('express');
var app = express();
var consign = require('consign');
var bodyParser = require('body-parser');
var validator = require('express-validator');
var Override = require('method-override');

module.exports = function () {

    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(validator());

    app.use(Override(function (req, res) {
        if (req.body && typeof req.body === 'object' && '_method' in req.body) {
            // look in urlencoded POST bodies and delete it
            var method = req.body._method
            delete req.body._method
            return method
        }
    }));


    consign({
            cwd: 'app',
            extensions: ['.js', '.json', '.node'],
            verbose: false
        })
        .include('routes')
        .then('infra')
        .into(app);

    return app;
}