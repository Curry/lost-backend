import { Injectable } from '@nestjs/common';
import { Map } from './data/map.db';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { from } from 'rxjs';
import { Connection } from './data/connection.db';
import { map } from 'rxjs/operators';

@Injectable()
export class MapService {
  constructor(
    @InjectRepository(Map, 'lost')
    private readonly mapRepo: Repository<Map>,
    @InjectRepository(Connection, 'lost')
    private readonly connRepo: Repository<Connection>,
  ) {}

  test() {
    const conn = new Connection();
    conn.mapId = 1;
    conn.source = 5
    conn.target = 6;
    return from(this.connRepo.save(conn));
  }

  getConnectionByMapId = (id: number) =>
    from(this.connRepo.find({ mapId: id })).pipe(
      map(val =>
        val.map(conn => ({
          systemId: conn.source,
          linkedSystemId: conn.target,
        })),
      ),
    );
}
