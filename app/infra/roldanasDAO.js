function roldanasDAO(connection){
    this._connection = connection;
}

roldanasDAO.prototype.listaRoldanas = function(callback){
    this._connection.query('SELECT * FROM roldanas', callback);
}

roldanasDAO.prototype.insereRoldana = function(roldana, callback){
    this._connection.query('INSERT INTO roldanas SET ? ', roldana, callback)
}

module.exports = function(){
    return roldanasDAO;
}