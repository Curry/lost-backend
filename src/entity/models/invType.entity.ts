import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { DgmTypeAttribute } from './dgmTypeAttribute.entity';

@Entity('invTypes')
export class InvType {
  @PrimaryColumn()
  typeID: number;

  @Column()
  typeName: string;

  @OneToMany(
    () => DgmTypeAttribute,
    dgmType => dgmType.invType,
    {
      eager: true,
    },
  )
  dgmTypeAttributes: DgmTypeAttribute[];
}
