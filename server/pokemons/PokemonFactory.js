const http = require('https');
const connectionFactory = require('../config/connectionFactory.js');
const PokemonsDAO = require('./PokemonsDAO.js');
const constants = require('../constants.js');
const urlChecker = require('./urlChecker.js')();

var pokemons = [];
var connection = connectionFactory(constants.ENV.PROD);
var pagamentoDao = new PokemonsDAO(connection);
var i = 0;

function PokemonFactory(pokemonsList, callback) {
    pokemonsList.forEach((obj) => {
        urlChecker(obj.name.toLowerCase(), (res) => {
            pokemons.push({
                "name": obj.name,
                "attack": obj.attack,
                "created": obj.created,
                "defense": obj.defense,
                "height": obj.height,
                "speed": obj.speed,
                "types": JSON.stringify(obj.types),
                "img": res
            });
            if (++i == pokemonsList.length) {
                console.log("Callback");
                callback(pokemons);
            }
        });
    });
}

module.exports = function() {
    return PokemonFactory;
}
