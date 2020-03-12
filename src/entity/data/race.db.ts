import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn } from 'typeorm';
import { Faction } from './faction.db';

@Entity('race')
export class Race {
  @PrimaryColumn({
    type: 'int',
    width: 11
  })
  raceId: number;

  @Column({
    type: 'varchar',
    length: 128
  })
  raceName: string;

  @Column('text')
  description: string;

  @Column({
    type: 'int',
    width: 11
  })
  factionId: number;

  @OneToOne(() => Faction)
  @JoinColumn({ name: 'factionId' })
  faction: Promise<Faction>;
}
