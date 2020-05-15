import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('starType')
export class StarType {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;
}
