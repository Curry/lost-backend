import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { Type } from './type.entity';
import { StarType } from './starType.entity';

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
    precision: 20,
    nullable: true,
  })
  age: number;

  @Column({
    type: 'bigint',
    precision: 20,
    nullable: true,
  })
  radius: number;

  @Column({
    type: 'int',
    width: 11,
    nullable: true,
  })
  temperature: number;

  @Column('float', { nullable: true })
  luminosity: number;

  @Column({
    type: 'varchar',
    length: 128,
    nullable: true,
  })
  spectralClass: string;

  @Column({
    type: 'int',
    width: 11,
    nullable: true,
  })
  typeId: number;

  @OneToOne(() => StarType, { eager: true })
  @JoinColumn()
  starType: StarType;

}
