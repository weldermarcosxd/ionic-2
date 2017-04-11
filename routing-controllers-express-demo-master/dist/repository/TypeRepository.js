"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const Type_1 = require("../entity/Type");
let TypeRepository = class TypeRepository {
    constructor() {
        this.types = [
            new Type_1.Type("type #1"),
            new Type_1.Type("type #2"),
            new Type_1.Type("type #3"),
            new Type_1.Type("type #4"),
            new Type_1.Type("type #5"),
        ];
    }
    findAll() {
        return Promise.resolve(this.types);
    }
    findOne(id) {
        let foundType = undefined;
        this.types.forEach(type => {
            if (type.id === id)
                foundType = type;
        });
        return foundType;
    }
    save(type) {
        this.types.push(type);
        return type;
    }
    remove(id) {
        const type = this.findOne(id);
        if (type)
            this.types.splice(this.types.indexOf(type), 1);
        return type;
    }
};
TypeRepository = __decorate([
    typedi_1.Service()
], TypeRepository);
exports.TypeRepository = TypeRepository;
