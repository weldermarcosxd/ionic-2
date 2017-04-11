import { JsonController, Get, Post, Param, Delete, Body } from "routing-controllers";
import { Service } from "typedi";
import { TypeRepository } from "../repository/TypeRepository";
import { Type } from "../entity/Type";

@Service()
@JsonController()
export class TypeController {

    constructor(private typeRepository: TypeRepository) {
    }

    @Get("/types")
    all(): Promise<Type[]> {
        return this.typeRepository.findAll();
    }

    @Get("/types/:id")
    one(@Param("id") id: number): Type {
        return this.typeRepository.findOne(id);
    }

    @Post("/types")
    category(@Body() type: Type): Type {
        return this.typeRepository.save(type);
    }

    @Delete("/types/:id")
    delete(@Param("id") id: number): Type {
        return this.typeRepository.remove(id);
    }

}
