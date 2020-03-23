import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Type } from './type.entity';
import { AttributeType } from './attributeType.entity';

@Entity('typeAttribute')
export class TypeAttribute {
  @PrimaryColumn({
    type: 'int',
    width: 11,
  })
  typeID: number;

  @PrimaryColumn({
    type: 'int',
    width: 11,
  })
  attributeID: number;

  @Column('float', { nullable: true })
  valueFloat: number;

  @Column({
    type: 'int',
    width: 11,
    nullable: true,
  })
  valueInt: number;

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
