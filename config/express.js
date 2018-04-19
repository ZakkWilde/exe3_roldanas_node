var express    = require('express');
var app        = express();
var consign    = require('consign');
var bodyParser = require('body-parser');


module.exports = function () {


app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

consign({
    cwd: 'app',
    extensions: ['.js','.json', '.node'],
    verbose: false
})
.include('routes')
.then('infra')
.into(app);

    return app;
}