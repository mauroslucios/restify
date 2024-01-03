const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: '172.21.0.2',
  user: 'root',
  password: 'P@SSw0r4',
  database: 'webservice'
})

const errorHandler = (error, msg, rejectFunction) => {
  console.error(error)
  rejectFunction({ error: msg })
}

// simple query
const categoryModule = require('./categories')({ connection, errorHandler })

module.exports = {
  categories: () => categoryModule
}
