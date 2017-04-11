import {Service} from "typedi";
import { Type } from "../entity/Type";

@Service()
export class TypeRepository {

    private types = [
        new Type("type #1"),
        new Type("type #2"),
        new Type("type #3"),
        new Type("type #4"),
        new Type("type #5"),
    ];

    findAll() {
        return Promise.resolve(this.types);
    }

    findOne(id: number) {
        let foundType: Type = undefined;
        this.types.forEach(type => {
            if (type.id === id)
                foundType = type;
        });
        return foundType;
    }

    save(type: Type) {
        this.types.push(type);
        return type;
    }

    remove(id: number) {
        const type = this.findOne(id);
        if (type)
            this.types.splice(this.types.indexOf(type), 1);
        return type;
    }

}
