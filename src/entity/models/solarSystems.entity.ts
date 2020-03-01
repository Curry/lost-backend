import {
  Entity,
  PrimaryColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { WormholeClasses } from './wormholeClasses.entity';
import { StaticMap } from './staticMap.entity';

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

  @OneToOne(type => WormholeClasses, {
    eager: true,
  })
  @JoinColumn({ name: 'regionID' })
  class: WormholeClasses;

  @OneToMany(
    type => StaticMap,
    statics => statics.system,
    {
      eager: true,
    },
  )
  statics: StaticMap[];

  //   luminosity: number;
  //   border: number;
  //   fringe: number;
  //   corridor: number;
  //   hub: number;
  //   international: number;
  //   regional: number;
  //   factionID: number;
  //   radius: number;
  //   sunTypeID: number;
  //   securityClass: string;
  //   constellation: number;
}
