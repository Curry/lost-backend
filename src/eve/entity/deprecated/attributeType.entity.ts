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
    length: 100,
    nullable: true,
  })
  attributeName: string;

  @Column({
    type: 'varchar',
    length: 1000,
    nullable: true,
  })
  description: string;
}
