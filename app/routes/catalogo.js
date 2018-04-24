// var connectionFactory = require('../infra/connectionFactory');

module.exports = function (app) {
    app.get('/catalogo', function (req, res) {

        var connection = app.infra.connectionFactory;
        var roldanasDAO = new app.infra.roldanasDAO(connection);

        roldanasDAO.listaRoldanas(function (error, results) {
            if (error) throw error;

            res.format({
                html: function () {
                    res.render('roldanas/catalogo', {
                        resultsHTML: results
                    });
                },
                json: function () {
                    res.json(results)
                }
            });
        });
        // connection.end();
    });

    app.get('/cadastro', function (req, res) {
        res.render('roldanas/cadastro', {
            resultsHTML: res
        });
    });

    app.post('/cadastro', function (req, res) {

        var roldana = req.body;

        req.assert("nomeFantasia", "Nome Fantasia, Não pode ser Vazio").notEmpty();

        req.checkBody(
            "preco",
            "price must be a number"
        ).isNumeric().isDivisibleBy(2);
        // req.checkBody(
        //     "cor",
        //     "color must be a valid hex one"
        // ).isHexColor();

        var errors = req.validationErrors();
        if (errors) {
            // res.render('create', { errors: errors });
            res.send(errors);
            return;
        } else {

            var connection = app.infra.connectionFactory;
            var roldanasDAO = new app.infra.roldanasDAO(connection);

            roldanasDAO.insereRoldana(roldana, function (error, result) {
                // if (error) throw error;
                res.redirect('/catalogo');
            });
        }
    });

    app.delete('/catalogo/(:id)', function (req, res, next) {
        var user = {
            id: req.params.id
        }
        var roldana = req.body;

        var connection = app.infra.connectionFactory;
        var roldanasDAO = new app.infra.roldanasDAO(connection);

        roldanasDAO.deltaRoldana(roldana, function (error, result) {
            // if (error) throw error;
            res.redirect('/catalogo');
        });
    });

    app.put('/catalogo/(:id)', function (req, res, next) {

        var roldana = req.body;

        var connection = app.infra.connectionFactory;
        var roldanasDAO = new app.infra.roldanasDAO(connection);

        roldanasDAO.atualizaRoldana(roldana, function (error, result) {
            // if (error) throw error;
            res.redirect('/catalogo');
        });
    });
}