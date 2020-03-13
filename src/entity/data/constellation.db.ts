import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Region } from './region.db';

@Entity('constellations')
export class Constellation {
  @PrimaryColumn({
    type: 'int',
    width: 11
  })
  constellationID: number;

  @Column({
    type: 'int',
    width: 11,
    nullable: true,
  })
  regionID: number;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  constellationName: string;

  @Column({
    type: 'int',
    width: 11,
    nullable: true,
  })
  factionID: number;

  @ManyToOne(() => Region, { onDelete: 'CASCADE', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'regionID' })
  region: Region;
}
