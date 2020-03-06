import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { SolarSystem } from './solarSystems.entity';
import { InvType } from './invType.entity';

@Entity('mapStatics')
export class MapStatic {
  @PrimaryColumn()
  id: number;

  @Column()
  systemId: number;

  @Column()
  typeID: number;

  @ManyToOne(
    () => SolarSystem,
    system => system.statics,
  )
  @JoinColumn({
    name: 'systemId',
    referencedColumnName: 'solarSystemID',
  })
  system: SolarSystem;

  @OneToOne(() => InvType, {
    eager: true,
  })
  @JoinColumn({ name: 'typeID', referencedColumnName: 'typeID' })
  invType: InvType;
}
