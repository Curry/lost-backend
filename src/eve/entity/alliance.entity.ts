import { Entity, Column, PrimaryColumn, JoinColumn, OneToMany, ManyToOne } from 'typeorm';
import { Faction } from './faction.entity';
import { Corporation } from './corporation.entity';

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

  @OneToMany(() => Corporation, corporation => corporation.alliance, { cascade: true, eager: true })
  @JoinColumn({ name: 'allianceId' })
  corporations: Corporation[];

  @ManyToOne(() => Faction, { onDelete: 'SET NULL', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'factionId' })
  faction: Faction;
}