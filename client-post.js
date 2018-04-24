var http = require("http");

var config = {
    hostname: 'localhost',
    port: '3000',
    path: '/cadastro',
    method: 'POST',
    headers:{
        'Accept':'application/json',
        'Content-type':'application/json'
    }
}

var roldanas = {
    nomeFantasia: "Madeleide Juazeira",
    dataFabricacao: "30/04/1994",
    cor:"Verde",
    altura:"1,34",
    preco:"200",
    peso:"75kg"
}

roldana = http.request(config, function(res) {
    console.log(res.statusCode);
    res.on('data', function (body) {
        console.log('Corpo' + body);
    })
});

roldana.end(JSON.stringify(roldanas));