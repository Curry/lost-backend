import { Entity, Column, PrimaryColumn, AfterLoad } from 'typeorm';

@Entity('systemNeighbor')
export class SystemNeighbor {
  @PrimaryColumn()
  systemId: number;

  @Column()
  jumpNodes: string;

  adjacentSystemIds: number[];

  @AfterLoad()
  updateIds = () => {
      this.adjacentSystemIds = this.jumpNodes.split(':').map(val => parseInt(val));
  }
}
