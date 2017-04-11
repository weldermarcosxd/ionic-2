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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Type_1 = require("./Type");
let Pokemon = class Pokemon {
    constructor(name, types) {
        this.name = name;
        this.types = types;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: "bigint", length: 20 }),
    __metadata("design:type", Number)
], Pokemon.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: "string", length: 255 }),
    __metadata("design:type", String)
], Pokemon.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ type: 'decimal', length: 10, nullable: true, precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], Pokemon.prototype, "attack", void 0);
__decorate([
    typeorm_1.Column({ type: 'decimal', length: 10, nullable: true, precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], Pokemon.prototype, "hp", void 0);
__decorate([
    typeorm_1.Column({ type: 'decimal', length: 10, nullable: true, precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], Pokemon.prototype, "defense", void 0);
__decorate([
    typeorm_1.Column({ type: 'decimal', length: 10, nullable: true, precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], Pokemon.prototype, "height", void 0);
__decorate([
    typeorm_1.Column({ type: 'decimal', length: 10, nullable: true, precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], Pokemon.prototype, "speed", void 0);
__decorate([
    typeorm_1.Column({ type: "string", length: 255, nullable: true }),
    __metadata("design:type", String)
], Pokemon.prototype, "img", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({ default: () => "now()" }),
    __metadata("design:type", Date)
], Pokemon.prototype, "last_change", void 0);
__decorate([
    typeorm_1.ManyToMany(type => Type_1.Type, type => type.id, {
        cascadeInsert: true
    }),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], Pokemon.prototype, "types", void 0);
Pokemon = __decorate([
    typeorm_1.Table(),
    __metadata("design:paramtypes", [String, Array])
], Pokemon);
exports.Pokemon = Pokemon;
