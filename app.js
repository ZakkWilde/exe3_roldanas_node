// var app = require('./config/express')(); - esse tbm funciona
var express = require('./config/express');
var app = express();

var roldanasRoute = require('./app/routes/catalogo')(app);

app.listen(3000, function(){
    console.log('Roldanas Rodando');
});