import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { from } from 'rxjs';
import { Map } from './entity/map.entity';
import { Connection } from './entity/connection.entity';
import { System } from './entity/system.entity';

@Injectable()
export class LostService {
  constructor(
    @InjectRepository(Map, 'data')
    private readonly mapRepo: Repository<Map>,
    @InjectRepository(Connection, 'data')
    private readonly connRepo: Repository<Connection>,
    @InjectRepository(System, 'data')
    private readonly sysRepo: Repository<System>,
  ) {}

  getConnectionsByMapId = (id: number) =>
    from(this.connRepo.find({ mapId: id }));

  getSystemsByMapId = (id: number) => from(this.sysRepo.find({ mapId: id }));
}
