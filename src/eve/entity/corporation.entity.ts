import { Entity, Column, PrimaryColumn, JoinColumn, ManyToOne } from 'typeorm';
import { Alliance } from './alliance.entity';
import { Faction } from './faction.entity';

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

  @ManyToOne(() => Alliance, { onDelete: 'SET NULL', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'allianceId' })
  alliance: Alliance;

  @ManyToOne(() => Faction, { onDelete: 'SET NULL', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'factionId' })
  faction: Faction;
}
