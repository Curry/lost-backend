import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('attributeType')
export class AttributeType {
  @PrimaryColumn({
    type: 'int',
    width: 11
  })
  attributeID: number;

  @Column({
    type: 'varchar',
    length: 100
  })
  attributeName: string;

  @Column({
    type: 'varchar',
    length: 1000
  })
  description: string;
}
