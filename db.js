const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'siva',
  password: 'Caramel@2020',
  database: 'user'
});

module.exports = connection;
