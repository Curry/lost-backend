import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { Faction } from './faction.db';
import { Corporation } from './corporation.db';

@Entity('alliance')
export class Alliance {
  @PrimaryColumn({
    type: 'int',
    width: 11
  })
  allianceId: number;

  @Column({
    type: 'varchar',
    length: 128
  })
  allianceName: string;

  @Column({
    type: 'varchar',
    length: 128
  })
  ticker: string;

  @Column('datetime', { nullable: true })
  dateFounded: Date;

  @Column({
    type: 'int',
    width: 11,
    nullable: true
  })
  factionId: number;

  @OneToMany(() => Corporation, corporation => corporation.alliance, { eager: true })
  @JoinColumn({ name: 'allianceId' })
  corporations: Corporation[];

  // @OneToOne(() => Faction, { eager: true })
  // @JoinColumn({ name: 'factionId' })
  // faction: Faction;
}
