import { Injectable } from '@nestjs/common';
import { map, mergeMap, combineAll } from 'rxjs/operators';
import { EveService } from './eve/eve.service';
import { LostService } from './lost/lost.service';
import { from } from 'rxjs';
import { System } from './lost/entity/system.entity';
import { Connection } from './lost/entity/connection.entity';

@Injectable()
export class AppService {
  constructor(
    private readonly eveService: EveService,
    private readonly lostService: LostService,
  ) {}

  getSystems = () => this.eveService.findSystemById(31000637);

  getSystemsByMap = (mapId: number) =>
    this.lostService.getSystemsByMapId(mapId).pipe(
      mergeMap(systems =>
        from(systems).pipe(
          map(system =>
            this.eveService.findSystemById(system.systemId).pipe(
              map(sys => ({
                id: system.id,
                alias: system.alias,
                active: system.active,
                system: sys
              })),
            ),
          ),
          combineAll(),
        ),
      ),
    );

  updateSystem = (mapId: number, systemId: number, system: Partial<System>) =>
    this.lostService.updateSystem(mapId, systemId, system);

  addNewSystem = (
    mapId: number,
    systemId: number,
    active = true,
    alias: string = null,
  ) => {
    return this.eveService
      .findSystemById(systemId)
      .pipe(
        mergeMap(() =>
          this.lostService.addSystem(mapId, systemId, active, alias),
        ),
      );
  };

  getConnectionsByMap = (mapId: number) =>
    this.lostService.getConnectionsByMapId(mapId);

  updateConnection = (connectionId: number, connection: Partial<Connection>) =>
    this.lostService.updateConnection(connectionId, connection);

  addNewConnection = (mapId: number, source: number, target: number) =>
    this.lostService.addConnection(mapId, source, target);
}
