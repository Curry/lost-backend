import { Entity, Column, PrimaryColumn, JoinColumn, AfterLoad, ManyToOne } from 'typeorm';
import { System } from '../system.entity';
import { Type } from './type.entity';
import { Corporation } from '../corporation.entity';
import { Race } from '../race.entity';

@Entity('station')
export class Station {
  @PrimaryColumn({
    type: 'int',
    width: 11
  })
  stationId: number;

  @Column()
  stationName: string;

  @Column({ nullable: true })
  services: string;

  allServices: string[];

  @Column({ nullable: true })
  systemId: number;

  @ManyToOne(() => System, { onDelete: 'CASCADE', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'systemId' })
  system: Promise<System>;

  @Column({ nullable: true })
  typeId: number;

  @ManyToOne(() => Type, { onDelete: 'CASCADE', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'typeId' })
  type: Type;

  @Column({ nullable: true })
  corporationId: number;

  @ManyToOne(() => Corporation, { onDelete: 'CASCADE', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'corporationId' })
  corporation: Promise<Corporation>;

  @Column({ nullable: true })
  raceId: number;

  @ManyToOne(() => Race, { onDelete: 'CASCADE', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'raceId'} )
  race: Promise<Race>;

  @AfterLoad()
  getServices() {
    this.allServices = JSON.parse(this.services)
  }
}
