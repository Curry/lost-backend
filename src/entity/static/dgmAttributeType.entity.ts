import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('dgmAttributeTypes')
export class DgmAttributeType {
  @PrimaryColumn()
  attributeID: number;

  @Column()
  description: string;
}
