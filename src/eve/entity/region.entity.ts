import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('region')
export class Region {
  @PrimaryColumn({
    type: 'int',
    width: 11
  })
  regionID: number;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  regionName: string;

  @Column({
    type: 'int',
    width: 11,
    nullable: true,
  })
  factionID: number;
}
