const mysql = require('mysql');
const constants = require('../constants');

function createDBConnection(env) {
  const info = env == "prod" ? constants.DB : constants.DB_TESTE;

  return mysql.createConnection({
    host: info.host,
    user: info.user,
    password: info.pass,
    database: info.database
  });
}

module.exports = function () {
  return createDBConnection;
}
