import {
  Entity,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Map } from './map.entity';
import { System } from './system.entity';

@Entity('connection')
@Unique(['source', 'target', 'mapId'])
export class Connection {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  source: number;

  @Column()
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
