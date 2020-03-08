import { Entity, Column, OneToMany, PrimaryColumn, OneToOne, JoinColumn } from 'typeorm';
import { SystemStatic } from './systemStatic.db';
import { Effect } from '../structures/system';
import { Constellation } from './constellation.db';
import { Region } from './region.db';

@Entity('system')
export class System {
  @PrimaryColumn()
  systemId: number;

  @Column()
  constellationId: number;

  @Column()
  regionId: number;

  @Column()
  systemName: string;

  @Column()
  starId: number;

  @Column()
  security: string;

  @Column()
  trueSec: number;

  @Column()
  securityStatus: number;

  @Column()
  securityClass: string;

  @Column()
  effect: Effect;

  @OneToMany(
    () => SystemStatic,
    systemStatic => systemStatic.system,
    { eager: true },
  )
  statics: SystemStatic[];
}
