import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn } from 'typeorm';
import { Category } from './category.db';

@Entity('group')
export class Group {
  @PrimaryColumn({
    type: 'int',
    width: 11
  })
  groupId: number;

  @Column({
    type: 'varchar',
    length: 128
  })
  groupName: string;

  @Column({
    type: 'tinyint',
    precision: 1
  })
  published: number;

  @Column({
    type: 'int',
    width: 11
  })
  categoryId: number;

  @OneToOne(() => Category, { eager: true })
  @JoinColumn({ name: 'categoryId' })
  category: Category;
}
