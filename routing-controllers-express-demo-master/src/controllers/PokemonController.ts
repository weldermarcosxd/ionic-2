import { JsonController, Get, Post as HttpPost, Param, Delete, Body } from "routing-controllers";
import {Req, Res} from "routing-controllers";
import { Service } from "typedi";
import { getEntityManager } from "typeorm";
import { PokemonRepository } from "../repository/PokemonRepository";
import { Pokemon } from "../entity/Pokemon";

@Service()
@JsonController()
export class PostController {

    constructor(private pokemonRepository: PokemonRepository) {
    }

    @Get("/pokemons")
    all(): Promise<Pokemon[]> {
        return this.pokemonRepository.findAll();
    }

    @Get("/pokemonsz")
    alls (@Req() req: any, @Res() res: any) {
        console.log(req.query.token);
        const pokemonRepository = getEntityManager().getRepository(Pokemon);
        const pokemons = pokemonRepository.find();
        res.send(pokemons);
    }



    @Get("/pokemons/:id")
    one( @Param("id") id: number): Pokemon {
        return this.pokemonRepository.findOne(id);
    }

    @HttpPost("/pokemons")
    post( @Body() pokemon: Pokemon): Pokemon {
        return this.pokemonRepository.save(pokemon);
    }

    @Delete("/pokemons/:id")
    delete( @Param("id") id: number): Pokemon {
        return this.pokemonRepository.remove(id);
    }

}
