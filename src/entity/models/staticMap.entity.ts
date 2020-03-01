import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { SolarSystem } from './SolarSystems.entity';
import { InvType } from './invType.entity';

@Entity('staticMap')
export class StaticMap {
    @PrimaryColumn()
    constellationID: number;

    @PrimaryColumn()
    typeID: number;

    @ManyToOne(type => SolarSystem, system => system.statics)
    @JoinColumn({name: 'constellationID', referencedColumnName: 'constellationID'})
    system: SolarSystem;

    @OneToOne(type => InvType, {
        eager: true,
    })
    @JoinColumn({ name: 'typeID', referencedColumnName: 'typeID' })
    invType: InvType;
}
