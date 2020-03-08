import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { TypeAttribute } from './typeAttribute.db';

@Entity('type')
export class Type {
  @PrimaryColumn()
  typeID: number;

  @Column()
  typeName: string;

  @Column()
  description: string;

  @OneToMany(
    () => TypeAttribute,
    typeAttribute => typeAttribute.type,
    {
      eager: true,
    },
  )
  typeAttributes: TypeAttribute[];
}
