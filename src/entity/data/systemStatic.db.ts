import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { System } from './system.db';
import { Type } from './type.db';

@Entity('systemStatic')
export class SystemStatic {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'int',
    width: 11,
    nullable: true,
  })
  systemId: number;

  @Column({
    type: 'int',
    width: 11,
    nullable: true,
  })
  typeId: number;

  @ManyToOne(
    () => System,
    system => system.statics,
    {
      onDelete: 'CASCADE',
      onUpdate: 'RESTRICT',
    },
  )
  @JoinColumn({
    name: 'systemId',
    referencedColumnName: 'systemId',
  })
  system: System;

  @ManyToOne(() => Type, {
    eager: true,
    onDelete: 'CASCADE',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn({ name: 'typeId', referencedColumnName: 'typeID' })
  type: Type;
}
