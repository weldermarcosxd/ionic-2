import {Table, PrimaryGeneratedColumn, Column} from "typeorm";

@Table()
export class Type {

    constructor(name: string) {
        this.name = name;
    }

    @PrimaryGeneratedColumn({ type: "bigint", length: 20 })
    id: number;

    @Column({ type: "string", length: 30, default: 'Normal', unique: true })
    name: string;

}
