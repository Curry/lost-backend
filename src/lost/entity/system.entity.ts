import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Unique } from 'typeorm';
import { Map } from './map.entity';

@Entity('system')
@Unique(['mapId', 'systemId'])
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

  @Column({ default: null })
  alias: string;

  @ManyToOne(() => Map, { onDelete: 'CASCADE', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'mapId' })
  map: Map;
}
