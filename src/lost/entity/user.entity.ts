import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column, OneToMany, JoinColumn } from "typeorm";
import { Character } from "./character.entity";

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;

    @Column({ default: false })
    active: boolean;

    @Column()
    name: string;

    @Column()
    email: string;

    // @OneToMany(() => Character, character => character.user)
    // @JoinColumn({ referencedColumnName: 'userId' })
    // characters: Character[];
}