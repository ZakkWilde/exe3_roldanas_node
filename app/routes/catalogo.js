module.exports = function (app) {
    app.get('/catalogo', function (req, res) {
        res.render('roldanas/catalogo');
    })
}