const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: '172.21.0.2',
  user: 'root',
  password: 'P@SSw0r4',
  database: 'webservice'
});

// simple query
const categoryModule = require('./categories')({ connection })

module.exports = {
  categories: () => categoryModule
}
