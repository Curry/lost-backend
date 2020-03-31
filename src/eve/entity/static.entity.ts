import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('static')
export class Static {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('float')
  targetClass: number;

  @Column('float')
  lifetime: number;

  @Column('float')
  maxMass: number;

  @Column('float')
  massRegen: number;

  @Column('float')
  maxOnePass: number;
}
