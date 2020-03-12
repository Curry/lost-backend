import { Injectable, HttpService, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { from, Observable, forkJoin, timer, zip } from 'rxjs';
import {
  map,
  exhaustMap,
  catchError,
  mergeMap,
  combineAll,
  retry,
  tap,
} from 'rxjs/operators';
import { System } from './data/system.db';
import { SystemModel } from './models/system';
import { Corporation } from './data/corporation.db';
import { Alliance } from './data/alliance.db';
import { ESIAlliance, ESICorporation } from './models/esi.model';

@Injectable()
export class EntityService {
  constructor(
    @InjectRepository(System)
    private readonly systemRepo: Repository<System>,
    @InjectRepository(Corporation)
    private readonly corpRepo: Repository<Corporation>,
    @InjectRepository(Alliance)
    private readonly allianceRepo: Repository<Alliance>,
    private readonly http: HttpService,
  ) {}

  private esiUrl = 'https://esi.evetech.net/latest';

  findSystemByName = (name: string): Observable<SystemModel> =>
    from(this.systemRepo.findOne({ systemName: name })).pipe(
      map(val => new SystemModel(val)),
      catchError(() => {
        throw new NotFoundException();
      }),
    );

  findCorpById = (id: number) => from(this.corpRepo.findOne(id));

  findAllianceById = (id: number) => from(this.allianceRepo.findOne(id));

  findRoute = (
    src: number,
    dest: number,
    avoidance: number[] = [],
    mapFlag: 'shortest' | 'secure' | 'insecure' = 'shortest',
    dataSource = 'tranquility',
  ) =>
    this.http
      .get<number[]>(`${this.esiUrl}/route/${src}/${dest}`, {
        params: {
          datasource: dataSource,
          flag: mapFlag,
          avoid: avoidance + '',
        },
      })
      .pipe(
        exhaustMap(val =>
          forkJoin(
            val.data.map(systemId => from(this.systemRepo.findOne(systemId))),
          ),
        ),
      );

  findAlliances = () =>
    this.http.get<number[]>(`${this.esiUrl}/alliances`).pipe(
      map(val => val.data),
      mergeMap(val =>
        zip(from(val.sort().slice(0, 1)), timer(0, 100), x => x).pipe(
          mergeMap(this.findAllianceInfo),
          mergeMap(val =>
            this.findCorps(val.alliance_id).pipe(
              map(corps => {
                val.corpIds = corps.data;
                return val;
              }),
            ),
          ),
          map(val =>
            from(val.corpIds).pipe(
              map(this.findCorpInfo),
              combineAll(),
              map(corpInfo => {
                val.corporations = corpInfo;
                return val;
              }),
            ),
          ),
          combineAll(),
        ),
      ),
      map(val => val.map(this.convertESItoModel)),
      tap(this.saveAlliances),
      // map(val => val.map(va => va.allianceId)),
    );

  getUniqueAlliances = (id: number[]) => from(this.allianceRepo.find()).pipe(
    // map(val => )
  )

  delete = () => from(this.allianceRepo.delete(1001642281))

  saveAlliances = (alliance: Alliance[]) => {
    alliance.forEach(val => {
      this.allianceRepo.save(val);
    });
  };

  findCorps = (allianceId: number) =>
    this.http
      .get<number[]>(`${this.esiUrl}/alliances/${allianceId}/corporations`)
      .pipe(retry(10));

  findCorpInfo = (corpId: number) =>
    this.http.get<ESICorporation>(`${this.esiUrl}/corporations/${corpId}`).pipe(
      retry(10),
      map(corp => {
        corp.data['corporation_id'] = corpId;
        return corp.data;
      }),
    );

  findAllianceInfo = (allianceId: number) =>
    this.http.get<ESIAlliance>(`${this.esiUrl}/alliances/${allianceId}`).pipe(
      retry(10),
      map(alliance => {
        alliance.data['alliance_id'] = allianceId;
        return alliance.data;
      }),
    );

  convertESItoModel = (alliance: ESIAlliance) => ({
    allianceId: alliance.alliance_id,
    allianceName: alliance.name,
    factionId: alliance.faction_id,
    ticker: alliance.ticker,
    dateFounded: alliance.date_founded,
    corporations: alliance.corporations.map(
      corp =>
        ({
          corporationId: corp.corporation_id,
          allianceId: corp.alliance_id,
          corporationName: corp.name,
          ticker: corp.ticker,
          dateFounded: corp.date_founded,
          isNPC: 0,
          memberCount: corp.member_count,
          factionId: corp.faction_id,
        } as Corporation),
    ),
  } as Alliance)
}
