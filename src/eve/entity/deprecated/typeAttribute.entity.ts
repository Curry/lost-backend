import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Type } from './type.entity';
import { AttributeType } from './attributeType.entity';

@Entity('typeAttribute')
export class TypeAttribute {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'int',
    width: 11,
  })
  typeID: number;

  @Column({
    type: 'int',
    width: 11,
  })
  attributeID: number;

  @Column('float', { nullable: true })
  value: number;

  @ManyToOne(
    () => Type,
    type => type.typeAttributes,
    {
      onDelete: 'CASCADE',
      onUpdate: 'RESTRICT',
    },
  )
  @JoinColumn({ name: 'typeID' })
  type: Type;

  @ManyToOne(() => AttributeType, {
    eager: true,
    onDelete: 'CASCADE',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn({ name: 'attributeID' })
  attributeType: AttributeType;
}
