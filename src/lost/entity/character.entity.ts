import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('character')
export class Character {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    created: Date;
  
    @UpdateDateColumn()
    updated: Date;

    // @Column()
    // userId: number;

    @Column()
    ownerHash: string;

    @Column()
    esiAccessToken: string;

    @Column()
    esiAccessTokenExpires: Date;

    @Column()
    esiRefreshToken: string;

    @Column()
    esiScopes: string;
    
    @Column()
    characterId: number;

    @Column()
    lastLogin: Date;

    @Column({ default: false })
    active: boolean;

    // @ManyToOne(() => User, { onDelete: 'CASCADE', onUpdate: 'RESTRICT' })
    // @JoinColumn({ name: 'userId' })
    // user: User;
}