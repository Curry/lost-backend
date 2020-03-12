import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('category')
export class Category {
  @PrimaryColumn({
    type: 'int',
    width: 11
  })
  categoryId: number;

  @Column({
    type: 'varchar',
    length: 128
  })
  categoryName: string;

  @Column({
    type: 'tinyint',
    precision: 1
  })
  published: number;
}
