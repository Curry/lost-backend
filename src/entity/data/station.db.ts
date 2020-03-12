import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn, AfterLoad } from 'typeorm';
import { System } from './system.db';
import { Type } from './type.db';
import { Corporation } from './corporation.db';
import { Race } from './race.db';

@Entity('station')
export class Station {
  @PrimaryColumn({
    type: 'int',
    width: 11
  })
  stationId: number;

  @Column({
    type: 'varchar',
    length: 128
  })
  stationName: string;

  @Column('text')
  services: string;

  allServices: string[];

  @Column({
    type: 'int',
    width: 11
  })
  systemId: number;

  @OneToOne(() => System)
  @JoinColumn({ name: 'systemId' })
  system: Promise<System>;

  @Column({
    type: 'int',
    width: 11
  })
  typeId: number;

  @OneToOne(() => Type)
  @JoinColumn({ name: 'typeId' })
  type: Type;

  @Column({
    type: 'int',
    width: 11
  })
  corporationId: number;

  @OneToOne(() => Corporation)
  @JoinColumn({ name: 'corporationId' })
  corporation: Promise<Corporation>;

  @Column({
    type: 'int',
    width: 11
  })
  raceId: number;

  @OneToOne(() => Race)
  @JoinColumn({ name: 'raceId'} )
  race: Promise<Race>;

  @AfterLoad()
  getServices() {
    this.allServices = JSON.parse(this.services)
  }
}
