const fs = require('fs');
const dbConnection = require('../config/connectionFactory.js')();
const PokemonFactory = require('./PokemonFactory.js')();
const PokemonsDAO = require('./PokemonsDAO.js')();
const constants = require('../constants.js');

var connection = dbConnection(constants.ENV.prod);
var pagamentoDao = new PokemonsDAO(connection);

fs.readFile('./data/data.json', 'utf8', function(err, data) {
    PokemonFactory(JSON.parse(data), (pokemons) => {
        pokemons.forEach((pokemon) => {
            pagamentoDao.persist(pokemon, (data) => {
              console.log(data);
            });
        });
    });
});
