import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { System } from 'src/entity/data/system.db';
import { Map } from './map.db';

@Entity('node')
export class Node {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;

  @Column()
  systemId: number;

  @Column()
  linkedSystemId: number;

  @Column()
  connectionName: string;

  @ManyToOne(() => System, { eager: true, onDelete: 'CASCADE', onUpdate: 'RESTRICT'})
  @JoinColumn({ name: 'systemId' })
  system: System;

  @ManyToOne(() => System, { eager: true, onDelete: 'CASCADE', onUpdate: 'RESTRICT'})
  @JoinColumn({ name: 'linkedSystemId', referencedColumnName: 'systemId' })
  linkedSystem: System;

  @ManyToOne(() => Map, map => map.nodes, { onDelete: 'CASCADE', onUpdate: 'RESTRICT'})
  map: Map;
}
