import { Entity, Column, PrimaryColumn, JoinColumn, ManyToOne } from 'typeorm';
import { DgmTypeAttribute } from './dgmTypeAttribute.entity';

@Entity('dgmAttributeTypes')
export class DgmAttributeType {
    @PrimaryColumn()
    attributeID: number;

    @Column()
    description: string;
}
