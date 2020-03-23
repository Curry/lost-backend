import {
  Entity,
  Column,
  OneToMany,
  PrimaryColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
  AfterLoad,
} from 'typeorm';
import { SystemStatic } from './systemStatic.entity';
import { Star } from './star.entity';
import { Constellation } from './constellation.entity';
import { Static } from 'src/models/system.model';

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
  effect: string;

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
