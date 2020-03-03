import { Entity, PrimaryColumn, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { SolarSystem } from './solarSystems.entity';
import { InvType } from './invType.entity';

@Entity('staticMap')
export class StaticMap {
    @PrimaryColumn()
    constellationID: number;

    @PrimaryColumn()
    typeID: number;

    @ManyToOne(() => SolarSystem, system => system.statics)
    @JoinColumn({name: 'constellationID', referencedColumnName: 'constellationID'})
    system: SolarSystem;

    @OneToOne(() => InvType, {
        eager: true,
    })
    @JoinColumn({ name: 'typeID', referencedColumnName: 'typeID' })
    invType: InvType;
}
