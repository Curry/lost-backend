import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { Alliance } from './alliance.db';
import { Faction } from './faction.db';

@Entity('corporation')
export class Corporation {
  @PrimaryColumn({
    type: 'int',
    width: 11
  })
  corporationId: number;

  @Column({
    type: 'int',
    width: 11,
    nullable: true
  })
  allianceId: number;

  @Column({
    type: 'int',
    width: 11,
    nullable: true
  })
  factionId: number;

  @Column({
    type: 'varchar',
    length: 128
  })
  corporationName: string;

  @Column({
    type: 'varchar',
    length: 128
  })
  ticker: string;

  @Column('datetime', { nullable: true })
  dateFounded: Date;

  @Column({
    type: 'int',
    width: 11
  })
  memberCount: number;

  @Column({
    type: 'tinyint',
    precision: 1
  })
  isNPC: number;

  @ManyToOne(() => Alliance, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'allianceId' })
  alliance: Alliance;

  // @OneToOne(() => Faction, { eager: true })
  // @JoinColumn({ name: 'factionId' })
  // faction: Faction;
}
