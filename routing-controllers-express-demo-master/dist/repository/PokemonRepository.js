"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const Pokemon_1 = require("../entity/Pokemon");
const Type_1 = require("../entity/Type");
let PokemonRepository = class PokemonRepository {
    constructor() {
        this.pokemons = [
            new Pokemon_1.Pokemon("pokemon #1", [new Type_1.Type("Eletric"), new Type_1.Type("Normal")]),
            new Pokemon_1.Pokemon("pokemon #2", [new Type_1.Type("Grass")]),
            new Pokemon_1.Pokemon("pokemon #3", [new Type_1.Type("Poison")]),
            new Pokemon_1.Pokemon("pokemon #4", [new Type_1.Type("Water"), new Type_1.Type("Psychic")]),
        ];
    }
    findAll() {
        return Promise.resolve(this.pokemons);
    }
    findOne(id) {
        let foundPokemon = undefined;
        this.pokemons.forEach(pokemon => {
            if (pokemon.id === id)
                foundPokemon = pokemon;
        });
        return foundPokemon;
    }
    save(pokemon) {
        this.pokemons.push(pokemon);
        return pokemon;
    }
    remove(id) {
        const pokemon = this.findOne(id);
        if (pokemon)
            this.pokemons.splice(this.pokemons.indexOf(pokemon), 1);
        return pokemon;
    }
};
PokemonRepository = __decorate([
    typedi_1.Service()
], PokemonRepository);
exports.PokemonRepository = PokemonRepository;
