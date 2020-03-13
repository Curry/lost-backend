import { Entity, Column, PrimaryColumn, JoinColumn, AfterLoad, ManyToOne } from 'typeorm';
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

  @Column('text', { nullable: true })
  services: string;

  allServices: string[];

  @Column({
    type: 'int',
    width: 11,
    nullable: true,
  })
  systemId: number;

  @ManyToOne(() => System, { onDelete: 'CASCADE', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'systemId' })
  system: Promise<System>;

  @Column({
    type: 'int',
    width: 11,
    nullable: true,
  })
  typeId: number;

  @ManyToOne(() => Type, { onDelete: 'CASCADE', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'typeId' })
  type: Type;

  @Column({
    type: 'int',
    width: 11,
    nullable: true,
  })
  corporationId: number;

  @ManyToOne(() => Corporation, { onDelete: 'CASCADE', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'corporationId' })
  corporation: Promise<Corporation>;

  @Column({
    type: 'int',
    width: 11,
    nullable: true,
  })
  raceId: number;

  @ManyToOne(() => Race, { onDelete: 'CASCADE', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'raceId'} )
  race: Promise<Race>;

  @AfterLoad()
  getServices() {
    this.allServices = JSON.parse(this.services)
  }
}
