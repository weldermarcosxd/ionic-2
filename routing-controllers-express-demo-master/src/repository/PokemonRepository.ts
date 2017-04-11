import {Service} from "typedi";
import { Pokemon } from "../entity/Pokemon";
import { Type } from "../entity/Type";

@Service()
export class PokemonRepository {

    private pokemons = [
        new Pokemon("pokemon #1", [new Type("Eletric"), new Type("Normal")]),
        new Pokemon("pokemon #2", [new Type("Grass")]),
        new Pokemon("pokemon #3", [new Type("Poison")]),
        new Pokemon("pokemon #4", [new Type("Water"), new Type("Psychic")]),
    ];

    findAll() {
        return Promise.resolve(this.pokemons);
    }

    findOne(id: number) {
        let foundPokemon: Pokemon = undefined;
        this.pokemons.forEach(pokemon => {
            if (pokemon.id === id)
                foundPokemon = pokemon;
        });
        return foundPokemon;
    }

    save(pokemon: Pokemon) {
        this.pokemons.push(pokemon);
        return pokemon;
    }

    remove(id: number) {
        const pokemon = this.findOne(id);
        if (pokemon)
            this.pokemons.splice(this.pokemons.indexOf(pokemon), 1);
        return pokemon;
    }

}
