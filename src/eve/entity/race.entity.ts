import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn } from 'typeorm';
import { Faction } from './faction.entity';

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

  @Column('text', { nullable: true })
  description: string;

  @Column({
    type: 'int',
    width: 11,
    nullable: true,
  })
  factionId: number;

  @OneToOne(() => Faction, { onDelete: 'CASCADE', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'factionId' })
  faction: Promise<Faction>;
}
