var mysql = require('mysql');

module.exports = function () {

    return mysql.createConnection({
        host: 'roldanainstance.cqunr0spvtoh.us-east-1.rds.amazonaws.com',
        user: 'root',
        password: 'Pa$$4eit',
        database: 'roldanaDB'
    });
}