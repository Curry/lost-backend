import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    characterId: number;

    @Column()
    userName: string;

    @Column()
    password: string;
}