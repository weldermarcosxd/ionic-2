const mysql = require('mysql');

function PokemonDao(connection) {
  this._connection = connection;
}

PokemonDao.prototype.findList = function (params, callback) {
  var query = 'SELECT * FROM pokemons order by ?? limit ? offset ?';
  query = mysql.format(query, [params.order, params.limit, params.offset]);
  this._connection.query(query, params, callback);
};

PokemonDao.prototype.findById = function (_id, callback) {
  var query = 'SELECT * FROM pokemons WHERE _id = ?';
  query = mysql.format(query,_id);
  this._connection.query(query, callback);
};

PokemonDao.prototype.persist = function (pokemon, callback) {
  var query = 'INSERT INTO pokemons SET ?';
  query = mysql.format(query,pokemon);
  this._connection.query(query, pokemon, callback);
};

module.exports = function () {
  return PokemonDao;
}
