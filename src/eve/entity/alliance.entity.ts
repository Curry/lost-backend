import {
  Entity,
  Column,
  PrimaryColumn,
  JoinColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Faction } from './faction.entity';
import { Corporation } from './corporation.entity';

@Entity('alliance')
export class Alliance {
  @PrimaryColumn()
  allianceId: number;

  @Column()
  allianceName: string;

  @Column()
  ticker: string;

  @Column({ nullable: true })
  dateFounded: Date;

  @Column({ nullable: true })
  factionId: number;

  @OneToMany(
    () => Corporation,
    corporation => corporation.alliance,
    { cascade: true, eager: true },
  )
  @JoinColumn({ name: 'allianceId' })
  corporations: Corporation[];

  @ManyToOne(() => Faction, { onDelete: 'SET NULL', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'factionId' })
  faction: Faction;
}
