import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('faction')
export class Faction {
  @PrimaryColumn({
    type: 'int',
    width: 11
  })
  factionId: number;

  @Column({
    type: 'varchar',
    length: 128
  })
  factionName: string;

  @Column('text', { nullable: true })
  description: string;

  @Column({
    type: 'int',
    width: 11
  })
  sizeFactor: number;

  @Column({
    type: 'int',
    width: 11
  })
  stationCount: number;

  @Column({
    type: 'int',
    width: 11
  })
  stationSystemCount: number;
}
