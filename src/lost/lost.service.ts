import { Injectable, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { from } from 'rxjs';
import { Map } from './entity/map.entity';
import { Connection } from './entity/connection.entity';
import { System } from './entity/system.entity';
import { catchError } from 'rxjs/operators';

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
  getSystemsByMapId = (id: number) => from(this.sysRepo.find({ mapId: id }));

  updateSystem = (mapId: number, systemId: number, system: Partial<System>) =>
    from(this.sysRepo.update({ mapId: mapId, systemId: systemId }, system));

  addSystem = (
    mapId: number,
    systemId: number,
    active = true,
    alias: string = undefined,
  ) =>
    from(
      this.sysRepo.save({
        active: active,
        mapId: mapId,
        systemId: systemId,
        alias: alias,
      } as System),
    ).pipe(
      catchError(() => {
        throw new ForbiddenException();
      }),
    );

  getConnectionsByMapId = (id: number) =>
    from(this.connRepo.find({ mapId: id }));

  updateConnection = (connectionId: number, connection: Partial<Connection>) =>
    from(this.connRepo.update(connectionId, connection));

  addConnection = (mapId: number, source: number, target: number) =>
    from(
      this.connRepo.save({
        mapId: mapId,
        source: source,
        target: target,
      } as Connection),
    )
}
