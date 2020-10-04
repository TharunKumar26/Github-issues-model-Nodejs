var mysql = require('mysql');
var dbconfig = require('../config/db');

var connection = mysql.createConnection(dbconfig.connection);

//connection.query('CREATE DATABASE ' + dbconfig.database);


connection.query('\
CREATE TABLE `' + dbconfig.database + '`.`' + dbconfig.issues + '` ( \
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT, \
    `user` VARCHAR(20) NOT NULL, \
    `issue` CHAR(60) NOT NULL, \
    `isopen` BOOLEAN, \
    `ts` TIMESTAMP DEFAULT CURRENT_TIMESTAMP, \
        PRIMARY KEY (`id`), \
    UNIQUE INDEX `id_UNIQUE` (`id` ASC), \
    UNIQUE INDEX `user_UNIQUE` (`user` ASC) \
)',(result)=>{
    console.log(result)
});

console.log('Success: Database Created!')

connection.end();

module.exports = connection;