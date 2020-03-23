import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, OneToMany } from 'typeorm';
import { Connection } from './connection.entity';

@Entity('map')
export class Map {
  @PrimaryGeneratedColumn()
  mapId: number;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;

  @OneToMany(() => Connection, conn => conn.map, {
    eager: true,
    cascade: true,
  })
  @JoinColumn({ name: 'mapId' })
  connections: Connection[];
}
