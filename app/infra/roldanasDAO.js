function roldanasDAO(connection){
    this._connection = connection;
}

roldanasDAO.prototype.listaRoldanas = function(callback){
    this._connection.query('SELECT * FROM roldanas', callback);
}

roldanasDAO.prototype.insereRoldana = function(roldana, callback){
    this._connection.query('INSERT INTO roldanas SET ? ', roldana, callback)
}

roldanasDAO.prototype.deletaRoldana = function(roldana, callback){
    this._connection.query('DELETE FROM roldanas WHERE nomeFantasia = ' + roldana.id, callback)
}

roldanasDAO.prototype.atualizaRoldana = function(roldana, callback){
    this._connection.query('UPDATE roldanas SET ? WHERE nomeFantasia = ' + roldana.id, callback)
}

module.exports = function(){
    return roldanasDAO;
}