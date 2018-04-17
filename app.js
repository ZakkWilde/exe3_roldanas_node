// var app = require('./config/express')();
var express = require('./config/express');
var app = express();

app.get('/catalogo', function(req, res){
    res.render('roldanas/catalogo');
});

app.listen(3000, function(){
    console.log('Roldanas Rodando');
});