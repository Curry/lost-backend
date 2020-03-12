import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Type } from './type.db';

@Entity('star')
export class Star {
  @PrimaryColumn({
    type: 'int',
    width: 11
  })
  starId: number;

  @Column({
    type: 'varchar',
    length: 128
  })
  starName: string;

  @Column({
    type: 'bigint',
    precision: 20
  })
  age: number;

  @Column({
    type: 'bigint',
    precision: 20
  })
  radius: number;

  @Column({
    type: 'int',
    width: 11
  })
  temperature: number;

  @Column('float')
  luminosity: number;

  @Column({
    type: 'varchar',
    length: 128
  })
  spectralClass: string;

  @Column({
    type: 'int',
    width: 11
  })
  typeId: number;

  @ManyToOne(() => Type, { eager: true })
  @JoinColumn({ name: 'typeId' })
  type: Type;

}
