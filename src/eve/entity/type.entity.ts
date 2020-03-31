import {
  Entity,
  Column,
  PrimaryColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { TypeAttribute } from './typeAttribute.entity';
import { Group } from './group.entity';

@Entity('type')
export class Type {
  @PrimaryColumn()
  typeID: number;

  @Column({ nullable: true })
  typeName: string;

  @Column('text', { nullable: true })
  description: string;

  @Column({ nullable: true })
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

  @ManyToOne(() => Group, {
    eager: true,
    onDelete: 'CASCADE',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn({ name: 'groupId' })
  group: Group;
}
