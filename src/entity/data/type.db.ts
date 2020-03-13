import { Entity, Column, PrimaryColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { TypeAttribute } from './typeAttribute.db';
import { Group } from './group.db';

@Entity('type')
export class Type {
  @PrimaryColumn({
    type: 'int',
    width: 11
  })
  typeID: number;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  typeName: string;

  @Column('text', { nullable: true })
  description: string;

  @Column({
    type: 'int',
    width: 11,
    nullable: true
  })
  groupId: number;

  @OneToMany(
    () => TypeAttribute,
    typeAttribute => typeAttribute.type,
    {
      eager: true,
    },
  )
  @JoinColumn({ name: 'typeID' })
  typeAttributes: TypeAttribute[];

  @ManyToOne(() => Group, { eager: true, onDelete: 'CASCADE', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'groupId' })
  group: Group;
}
