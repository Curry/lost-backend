import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('mapLocationWormholeClasses')
export class WormholeClasses {
  @PrimaryColumn()
  locationID: number;

  @Column()
  wormholeClassID: number;
}
