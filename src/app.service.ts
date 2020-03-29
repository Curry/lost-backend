import { Injectable, HttpService } from '@nestjs/common';
import { stringify } from 'qs';
import { map, mergeMap, combineAll } from 'rxjs/operators';
import { EveService } from './eve/eve.service';
import { LostService } from './lost/lost.service';
import { from } from 'rxjs';
import { System } from './lost/entity/system.entity';
import { Connection } from './lost/entity/connection.entity';

@Injectable()
export class AppService {
  constructor(
    private http: HttpService,
    private readonly eveService: EveService,
    private readonly lostService: LostService,
  ) {}

  getESIAuth = (code: string) =>
    this.http
      .post(
        'https://login.eveonline.com/v2/oauth/token',
        stringify({
          // eslint-disable-next-line @typescript-eslint/camelcase
          grant_type: 'authorization_code',
          code: code,
        }),
        {
          headers: {
            Authorization: `Basic ${Buffer.from(
              '88f6459ddde5474f99feda81918307e1:dZLJrBJP2B6XWo1kGms2aWI8PgCnRGmGfxUkFpzw',
            ).toString('base64')}`,
            'Content-Type': 'application/x-www-form-urlencoded',
            Host: 'login.eveonline.com',
          },
        },
      )
      .pipe(map(val => val.data));

  refreshESIToken = (token: string) =>
    this.http
      .post(
        'https://login.eveonline.com/v2/oauth/token',
        stringify({
          // eslint-disable-next-line @typescript-eslint/camelcase
          grant_type: 'refresh_token',
          // eslint-disable-next-line @typescript-eslint/camelcase
          refresh_token: token,
        }),
        {
          headers: {
            Authorization: `Basic ${Buffer.from(
              '88f6459ddde5474f99feda81918307e1:dZLJrBJP2B6XWo1kGms2aWI8PgCnRGmGfxUkFpzw',
            ).toString('base64')}`,
            'Content-Type': 'application/x-www-form-urlencoded',
            Host: 'login.eveonline.com',
          },
        },
      )
      .pipe(map(val => val.data));

  getSystemsByMap = (mapId: number) =>
    this.lostService.getSystemsByMapId(mapId).pipe(
      mergeMap(systems =>
        from(systems).pipe(
          map(system =>
            this.eveService.findSystemById(system.systemId).pipe(
              map(sys => {
                sys.id = system.id;
                sys.alias = system.alias;
                sys.active = system.active;
                return sys;
              }),
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
