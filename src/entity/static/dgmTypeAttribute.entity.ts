import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { InvType } from './invType.entity';
import { DgmAttributeType } from './dgmAttributeType.entity';

@Entity('dgmTypeAttributes')
export class DgmTypeAttribute {
  @PrimaryColumn()
  typeID: number;

  @PrimaryColumn()
  attributeID: number;

  
  @Column()
  valueFloat: number;

  @Column()
  valueInt: number;

  @ManyToOne(
    () => InvType,
    invType => invType.dgmTypeAttributes,
  )
  @JoinColumn({ name: 'typeID', referencedColumnName: 'typeID' })
  invType: InvType;

  @OneToOne(() => DgmAttributeType, {
    eager: true,
  })
  @JoinColumn({ name: 'attributeID', referencedColumnName: 'attributeID' })
  dgmAttributeType: DgmAttributeType;
}
