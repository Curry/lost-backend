import {
  Entity,
  Column,
  OneToMany,
  PrimaryColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { SystemStatic } from './systemStatic.db';
import { Effect } from '../models/system';
import { Star } from './star.db';
import { Constellation } from './constellation.db';

@Entity('system')
export class System {
  @PrimaryColumn({
    type: 'int',
    width: 11,
  })
  systemId: number;

  @Column({
    type: 'int',
    width: 11,
    nullable: true,
  })
  constellationId: number;

  @Column({
    type: 'int',
    width: 11,
    nullable: true,
  })
  starId: number;

  @Column({
    type: 'int',
    width: 11,
    nullable: true,
  })
  regionId: number;

  @Column({
    type: 'varchar',
    length: 128,
  })
  systemName: string;

  @Column({
    type: 'varchar',
    length: 128,
    nullable: true,
  })
  security: string;

  @Column('float')
  trueSec: number;

  @Column({
    type: 'decimal',
    precision: 18,
    scale: 6,
  })
  securityStatus: number;

  @Column({
    type: 'varchar',
    length: 128,
    nullable: true,
  })
  securityClass: string;

  @Column({
    type: 'varchar',
    length: 128,
    nullable: true,
  })
  effect: Effect;

  @ManyToOne(() => Constellation, { onDelete: 'CASCADE', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'constellationId' })
  constellation: Constellation;

  @OneToMany(
    () => SystemStatic,
    systemStatic => systemStatic.system,
    { eager: true },
  )
  statics: SystemStatic[];

  @OneToOne(() => Star, { onDelete: 'CASCADE', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'starId' })
  star: Promise<Star>;
}
