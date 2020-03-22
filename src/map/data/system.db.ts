import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Map } from './map.db';

@Entity('system')
export class System {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;

  @Column()
  active: boolean;

  @Column()
  mapId: number;

  @Column()
  systemId: number;

  @Column()
  alias: string;

  @ManyToOne(() => Map, { onDelete: 'CASCADE', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'mapId' })
  map: Map;
}
