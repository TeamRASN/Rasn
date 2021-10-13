const mysql = require('mysql');

function newPool() {
    let pool = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'rasn_mysql'
  });
  return pool;
}

module.exports= {newPool};