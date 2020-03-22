import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';
import { Map } from './map.db';
import { System } from './system.db';

@Entity('connection')
export class Connection {
  @PrimaryColumn()
  source: number;

  @PrimaryColumn()
  target: number;

  @Column()
  mapId: number;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;

  @ManyToOne(() => Map, { onDelete: 'CASCADE', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'mapId' })
  map: Map;

  @ManyToOne(() => System, { eager: true, onDelete: 'CASCADE', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'source', referencedColumnName: 'id' })
  sourceSystem: System;

  @ManyToOne(() => System, { eager: true, onDelete: 'CASCADE', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'target', referencedColumnName: 'id' })
  targetSystem: System;
}
