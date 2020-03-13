import {
  Entity,
  Column,
  PrimaryColumn,
  AfterLoad,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { System } from './system.db';

@Entity('systemNeighbor')
export class SystemNeighbor {
  @PrimaryColumn({
    type: 'int',
    width: 11,
  })
  systemId: number;

  @Column({
    type: 'varchar',
    length: 512,
  })
  jumpNodes: string;

  adjacentSystemIds: number[];

  @OneToOne(() => System, { onDelete: 'CASCADE', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'systemId' })
  system: System;

  @AfterLoad()
  updateIds = () => {
    this.adjacentSystemIds = this.jumpNodes
      .split(':')
      .map(val => parseInt(val));
  };
}
