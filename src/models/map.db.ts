import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, OneToMany } from 'typeorm';
import { Node } from './node.db';

@Entity('map')
export class Map {
  @PrimaryGeneratedColumn()
  mapId: number;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;

  @OneToMany(() => Node, node => node.map, { eager: true })
  @JoinColumn({ name: 'mapId', referencedColumnName: 'mapId'})
  nodes: Node;
}
