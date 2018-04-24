// describe('Testando Catalogo', function () {
//     it('listagem de roldanas', function () {
//         console.log('Passou por aqui');
//     })
// })

var chai      = require('chai');
var should    = chai.should;
var supertest = require('supertest');
var api       = supertest("http://localhost:3000");

describe("#Testando catalogo", function(){

    before(function(){
        api.get('/catalogo')
        .end(function(err, res){
            // console.log(err);
        })
    })

    it("É esperado retorno 200 ao acessar a pagina de catalogo", function(done){
        api.get('/catalogo')
        .set("Accept", "application/json")
        .end(function(err,res){
            // console.log(res);
            res.should.be.empty;
            res.statusCode.should.be.equal(200);
            done();
        })
    })

    it("É esperado retorno 404 ao colocar uma URL errada", function(done){
        api.get('/catalogo')
        .end(function(err, res){
            // console.log(res.text);
        })
    })
})

describe("#Testando Post", function(){
    it("É esperado retorno 302", function(done){
        api.post('/cadastro')
        .set("Content-Type", "application/json")
        .set("Accept", "application/json")
        .send({
            "nomeFantasia":" ... .. ",
            "dataFabricacao":"d...",
            "cor":"",
            "altura":"",
            "preco":"",
            "peso":""
        })
        .end(function(err, res){
            res.statusCode.should.be.equal(302);
            done();
        })
    })
})