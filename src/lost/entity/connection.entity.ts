import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';
import { Map } from './map.entity';
import { System } from './system.entity';

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

  @ManyToOne(() => System, { onDelete: 'CASCADE', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'source' })
  sourceSystem: System;

  @ManyToOne(() => System, { onDelete: 'CASCADE', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'target' })
  targetSystem: System;
}