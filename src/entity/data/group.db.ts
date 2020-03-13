import { Entity, Column, PrimaryColumn, JoinColumn, ManyToOne } from 'typeorm';
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
    width: 11,
    nullable: true,
  })
  categoryId: number;

  @ManyToOne(() => Category, { eager: true, onDelete: 'CASCADE', onUpdate: 'RESTRICT' })
  @JoinColumn({ name: 'categoryId' })
  category: Category;
}
