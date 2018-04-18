module.exports = function (app) {
    app.get('/catalogo', function (req, res) {

        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host:'roldanainstance.cqunr0spvtoh.us-east-1.rds.amazonaws.com',
            user:'root',
            password:'Pa$$4eit',
            database:'roldanaDB'
        });

        connection.query('SELECT * FROM roldanas', function(error, results){

            if(error) throw error;
            // console.log('conexão com o banco deu certo', results);
            res.render('roldanas/catalogo',{resultsHTML:results});
        });
        connection.end();
    });
}