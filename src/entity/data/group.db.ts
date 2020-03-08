import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import { Category } from './category.db';

@Entity('group')
export class Group {
  @PrimaryColumn()
  groupId: number;

  @Column()
  groupName: string;

  @Column()
  published: number;

  @ManyToOne(() => Category, { eager: true })
  category: Category;
}
