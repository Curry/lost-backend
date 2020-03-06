import {
  Entity,
  PrimaryColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { WormholeClasses } from './wormholeClasses.entity';
import { MapStatic } from './mapStatic.entity';

@Entity('mapSolarSystems')
export class SolarSystem {
  @PrimaryColumn()
  regionID: number;

  @PrimaryColumn()
  constellationID: number;

  @PrimaryColumn()
  solarSystemID: number;

  @Column()
  solarSystemName: string;

  @Column()
  security: number;

  @Column()
  luminosity: number;

  @Column()
  border: number;

  @Column()
  fringe: number;

  @Column()
  corridor: number;

  @Column()
  hub: number;

  @Column()
  international: number;

  @Column()
  regional: number;

  @Column()
  factionID: number;

  @Column()
  radius: number;

  @Column()
  sunTypeID: number;

  @Column()
  securityClass: string;

  @Column()
  constellation: number;

  @OneToOne(() => WormholeClasses, {
    eager: true,
  })
  @JoinColumn({ name: 'regionID' })
  class: WormholeClasses;

  @OneToMany(
    () => MapStatic,
    statics => statics.system,
    {
      eager: true,
    },
  )
  statics: MapStatic[];
}
