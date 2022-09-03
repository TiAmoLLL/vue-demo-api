const mysql = require('mysql');
let conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'restaurant',
    multipleStatements: true
})
conn.connect();

module.exports = conn