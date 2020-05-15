import {
  Entity,
  Column,
  PrimaryColumn,
  JoinColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Constellation } from './constellation.entity';
import { Static } from './static.entity';

@Entity('systems')
export class System {
  @PrimaryColumn()
  id: number;

  @Column({ nullable: true })
  constellationId: number;

  @Column({ nullable: true })
  starId: number;

  @Column({ nullable: true })
  regionId: number;

  @Column()
  systemName: string;

  @Column({ nullable: true })
  security: string;

  @Column('float')
  trueSec: number;

  @Column()
  securityStatus: number;

  @Column({ nullable: true })
  securityClass: string;

  @Column({ nullable: true })
  effect: string;

  @ManyToOne(() => Constellation, { onDelete: 'CASCADE', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'constellationId' })
  constellation: Constellation;

  @ManyToMany(
    () => Static,
    { eager: true }
  )
  @JoinTable({
    name: 'systemStatics',
  })
  statics: Static[];
}
