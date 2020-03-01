import { Entity, Column, PrimaryColumn, OneToMany, JoinColumn } from 'typeorm';
import { DgmTypeAttribute } from './dgmTypeAttribute.entity';

@Entity('invTypes')
export class InvType {
  @PrimaryColumn()
  typeID: number;

  @Column()
  typeName: string;

  @OneToMany(
    type => DgmTypeAttribute,
    dgmType => dgmType.invType,
    {
      eager: true,
    },
  )
  dgmTypeAttributes: DgmTypeAttribute[];
}
