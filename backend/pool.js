const mysql2 = require('mysql2/promise');

const pool = mysql2.createPool({
    host: 'mysql',
    port: 3306,
    user: 'root',
    password: 'manager',
    database: 'userdata',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool