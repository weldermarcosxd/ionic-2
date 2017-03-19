const mysql = require('mysql');

function PokemonsDAO(connection) {
  this._connection = connection;
  console.log(connection);
}

PokemonsDAO.prototype.persist = function (pokemon, callback) {
  console.log("Persistindo:" + pokemon.name);
  var query = 'INSERT INTO pokemons SET ?';
  query = mysql.format(query,pokemon);

  console.log(query);

  this._connection.query(query, pokemon, callback);
};

PokemonsDAO.prototype.findList = function (callback) {
  var query = 'SELECT pokemon FROM pokemons';
  this._connection.query(query, callback);
};

PokemonsDAO.prototype.findById = function (_id, callback) {
  var query = 'SELECT pokemon FROM pokemons pokemon WHERE _id = ??';
  query = mysql.format(query,_id);
  this._connection.query(query, callback);
};

module.exports = function () {
  return PokemonsDAO;
}
