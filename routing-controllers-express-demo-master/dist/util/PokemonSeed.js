"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Pokemon_1 = require("../entity/Pokemon");
const Type_1 = require("../entity/Type");
const typeorm_2 = require("typeorm");
var pokemons = require('./data.json');
typeorm_2.createConnection().then((connection) => __awaiter(this, void 0, void 0, function* () {
    var types = [];
    pokemons.forEach((pokemon) => {
        console.log(pokemon.name);
        const pokemonRepository = typeorm_1.getEntityManager().getRepository(Pokemon_1.Pokemon);
        types = [];
        pokemon.types.forEach(name => {
            connection
                .getRepository(Type_1.Type)
                .createQueryBuilder("type")
                .where("type.name LIKE :name", { name: "% " + name + " %" })
                .getOne().then((oldType) => {
                if (oldType) {
                    console.log(name, " is an old type. Type: ", oldType.name);
                    types.push(oldType);
                }
                else {
                    console.log(name.toString(), " is a new type");
                    types.push(new Type_1.Type(name.toString()));
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
            console.log("TypeORM connection error: ", pokemons.indexOf(pokemon));
            if (pokemons.indexOf(pokemon) == pokemons.length - 1) {
                console.log(error);
                process.exit(0);
            }
        });
    });
})).catch(error => console.log("TypeORM connection error: ", error));
