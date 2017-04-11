import {getEntityManager} from "typeorm";
import { Pokemon } from '../entity/Pokemon';
import { Type } from '../entity/Type';
import * as fs from 'fs';
import {createConnection} from "typeorm";
var pokemons = require('./data.json');

createConnection().then(async connection => {
    var types: Type[] = [];

    pokemons.forEach((pokemon: Pokemon) => {
        console.log(pokemon.name);
        const pokemonRepository = getEntityManager().getRepository(Pokemon);
        types = [];
        pokemon.types.forEach(name => {
            connection
                .getRepository(Type)
                .createQueryBuilder("type")
                .where("type.name LIKE :name", { name: "% " + name + " %" })
                .getOne().then((oldType: Type) => {
                  if(oldType){
                    console.log(name, " is an old type. Type: ", oldType.name)
                    types.push(oldType);
                  }else{
                    console.log(name.toString(), " is a new type");
                    types.push(new Type(name.toString()));
                  }
                });
        });

        pokemon.types = types;
        pokemon.height = Number(pokemon.height);

        const newPokemon = pokemonRepository.create(pokemon);
        pokemonRepository.persist(newPokemon).then((photo) => {
            console.log(pokemon);
            console.log(newPokemon);
            if (pokemons.indexOf(pokemon) == pokemons.length - 1) {
                process.exit(0);
            }
        }).catch(error => {
            console.log("TypeORM connection error: ", pokemons.indexOf(pokemon))
            if (pokemons.indexOf(pokemon) == pokemons.length - 1) {
                console.log(error);
                process.exit(0);
            }
        });
    });

}).catch(error => console.log("TypeORM connection error: ", error));
