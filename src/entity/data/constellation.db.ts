import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('constellations')
export class Constellation {
  @PrimaryColumn({
    type: 'int',
    width: 11
  })
  constellationID: number;

  @Column({
    type: 'int',
    width: 11
  })
  regionID: number;

  @Column({
    type: 'varchar',
    length: 100
  })
  constellationName: string;

  @Column({
    type: 'int',
    width: 11
  })
  factionID: number;
}
