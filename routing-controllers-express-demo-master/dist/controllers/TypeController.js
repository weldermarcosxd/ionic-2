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
const typedi_1 = require("typedi");
const TypeRepository_1 = require("../repository/TypeRepository");
const Type_1 = require("../entity/Type");
let TypeController = class TypeController {
    constructor(typeRepository) {
        this.typeRepository = typeRepository;
    }
    all() {
        return this.typeRepository.findAll();
    }
    one(id) {
        return this.typeRepository.findOne(id);
    }
    category(type) {
        return this.typeRepository.save(type);
    }
    delete(id) {
        return this.typeRepository.remove(id);
    }
};
__decorate([
    routing_controllers_1.Get("/types"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TypeController.prototype, "all", null);
__decorate([
    routing_controllers_1.Get("/types/:id"),
    __param(0, routing_controllers_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Type_1.Type)
], TypeController.prototype, "one", null);
__decorate([
    routing_controllers_1.Post("/types"),
    __param(0, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Type_1.Type]),
    __metadata("design:returntype", Type_1.Type)
], TypeController.prototype, "category", null);
__decorate([
    routing_controllers_1.Delete("/types/:id"),
    __param(0, routing_controllers_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Type_1.Type)
], TypeController.prototype, "delete", null);
TypeController = __decorate([
    typedi_1.Service(),
    routing_controllers_1.JsonController(),
    __metadata("design:paramtypes", [TypeRepository_1.TypeRepository])
], TypeController);
exports.TypeController = TypeController;
