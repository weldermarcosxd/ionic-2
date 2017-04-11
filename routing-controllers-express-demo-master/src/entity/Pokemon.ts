import {Table, PrimaryGeneratedColumn, UpdateDateColumn, Column, ManyToMany, JoinTable} from "typeorm";
import {Type} from "./Type";

@Table()
export class Pokemon {

    constructor(name: string, types: Type[]) {
        this.name = name;
        this.types = types;
    }

    @PrimaryGeneratedColumn({ type: "bigint", length: 20 })
    id: number;

    @Column({ type: "string", length: 255 })
    name: String;

    @Column({ type: 'decimal', length: 10, nullable: true, precision: 10, scale: 2, default: 0 })
    attack: Number;

    @Column({ type: 'decimal', length: 10, nullable: true, precision: 10, scale: 2, default: 0  })
    hp: number;

    @Column({ type: 'decimal', length: 10, nullable: true, precision: 10, scale: 2, default: 0 })
    defense: Number;

    @Column({ type: 'decimal', length: 10, nullable: true, precision: 10, scale: 2, default: 0 })
    height: Number;

    @Column({ type: 'decimal', length: 10, nullable: true, precision: 10, scale: 2, default: 0 })
    speed: Number;

    @Column({ type: "string", length: 255, nullable: true })
    img: String;

    @UpdateDateColumn({ default: () => "now()" })
    last_change: Date;

    @ManyToMany(type => Type, type => type.id, {
        cascadeInsert: true
    })
    @JoinTable()
    types: Type[];

}
