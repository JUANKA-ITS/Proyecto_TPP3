const mysql = require('mysql');

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'vue-api-db'
});


db.connect();
console.log("usted se a conectado exitosamente!");

module.exports = db;