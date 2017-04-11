"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
const routing_controllers_2 = require("routing-controllers");
const typedi_1 = require("typedi");
const typeorm_1 = require("typeorm");
const PokemonRepository_1 = require("../repository/PokemonRepository");
const Pokemon_1 = require("../entity/Pokemon");
let PostController = class PostController {
    constructor(pokemonRepository) {
        this.pokemonRepository = pokemonRepository;
    }
    all() {
        return this.pokemonRepository.findAll();
    }
    alls(req, res) {
        console.log(req.query.token);
        const pokemonRepository = typeorm_1.getEntityManager().getRepository(Pokemon_1.Pokemon);
        const pokemons = pokemonRepository.find();
        res.send(pokemons);
    }
    one(id) {
        return this.pokemonRepository.findOne(id);
    }
    post(pokemon) {
        return this.pokemonRepository.save(pokemon);
    }
    delete(id) {
        return this.pokemonRepository.remove(id);
    }
};
__decorate([
    routing_controllers_1.Get("/pokemons"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PostController.prototype, "all", null);
__decorate([
    routing_controllers_1.Get("/pokemonsz"),
    __param(0, routing_controllers_2.Req()), __param(1, routing_controllers_2.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "alls", null);
__decorate([
    routing_controllers_1.Get("/pokemons/:id"),
    __param(0, routing_controllers_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Pokemon_1.Pokemon)
], PostController.prototype, "one", null);
__decorate([
    routing_controllers_1.Post("/pokemons"),
    __param(0, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Pokemon_1.Pokemon]),
    __metadata("design:returntype", Pokemon_1.Pokemon)
], PostController.prototype, "post", null);
__decorate([
    routing_controllers_1.Delete("/pokemons/:id"),
    __param(0, routing_controllers_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Pokemon_1.Pokemon)
], PostController.prototype, "delete", null);
PostController = __decorate([
    typedi_1.Service(),
    routing_controllers_1.JsonController(),
    __metadata("design:paramtypes", [PokemonRepository_1.PokemonRepository])
], PostController);
exports.PostController = PostController;
