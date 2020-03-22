import { Injectable, HttpService, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { from, Observable, timer, zip, of, iif } from 'rxjs';
import { map, catchError, mergeMap, combineAll, retry } from 'rxjs/operators';
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

  findSystemById = (id: number): Observable<SystemModel> =>
    from(this.systemRepo.findOne(id)).pipe(
      map(val => new SystemModel(val)),
      catchError(() => {
        throw new NotFoundException();
      }),
    );

  findSystemByName = (name: string): Observable<SystemModel> =>
    from(this.systemRepo.findOne({ systemName: name })).pipe(
      map(val => new SystemModel(val)),
      catchError(() => {
        throw new NotFoundException();
      }),
    );

  findSystemsByName = (name: string): Observable<string[]> =>
    from(this.systemRepo.find({ systemName: Like(`${name}%`) })).pipe(
      map(val => val.map(sys => sys.systemName)),
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
        mergeMap(val =>
          from(val.data).pipe(
            map(systemId => from(this.systemRepo.findOne(systemId))),
            combineAll(),
          ),
        ),
      );

  findAlliances = () =>
    this.http.get<number[]>(`${this.esiUrl}/alliances`).pipe(
      map(val => val.data.sort()),
      mergeMap(this.filterAlliances),
      map(val => val.slice(0, 1)),
      mergeMap(this.findAllInfo),
      // mergeMap(this.saveAlliances),
    );

  filterAlliances = (id: number[]) =>
    from(this.allianceRepo.find()).pipe(
      map(val => val.map(alliance => alliance.allianceId)),
      map(val => ({
        toDelete: val.filter(dbAlliance => !id.includes(dbAlliance)),
        toCreate: id.filter(idAlliance => !val.includes(idAlliance)),
      })),
      mergeMap(val =>
        iif(
          () => val.toDelete.length !== 0,
          of(val.toDelete).pipe(
            mergeMap(alliance => from(this.allianceRepo.delete(alliance))),
            map(() => val.toCreate),
          ),
          of(val.toCreate),
        ),
      ),
    );

  saveAlliances = (alliance: Alliance[]) =>
    from(alliance).pipe(
      map(val => from(this.allianceRepo.save(val))),
      combineAll(),
      map(val => val.map(alliance => alliance.allianceId)),
    );

  findAllInfo = (alliances: number[]) =>
    zip(from(alliances), timer(0, 100), x => x).pipe(
      mergeMap(this.getESIAllianceInfo),
      mergeMap(this.getCorps),
      mergeMap(this.getCorpInfo),
      map(this.convertESItoModel),
      combineAll(),
    );

  getCorps = (alliance: ESIAlliance) =>
    this.http
      .get<number[]>(
        `${this.esiUrl}/alliances/${alliance.alliance_id}/corporations`,
      )
      .pipe(
        retry(10),
        map(corps => {
          alliance.corpIds = corps.data;
          return alliance;
        }),
      );

  getCorpInfo = (alliance: ESIAlliance) =>
    from(alliance.corpIds).pipe(
      map(this.getESICorpInfo),
      combineAll(),
      map(corpInfo => {
        alliance.corporations = corpInfo;
        return alliance;
      }),
    );

  getESIAllianceInfo = (allianceId: number) =>
    this.http.get<ESIAlliance>(`${this.esiUrl}/alliances/${allianceId}`).pipe(
      retry(10),
      map(alliance => {
        alliance.data['alliance_id'] = allianceId;
        return alliance.data;
      }),
    );

  getESICorpInfo = (corpId: number) =>
    this.http.get<ESICorporation>(`${this.esiUrl}/corporations/${corpId}`).pipe(
      retry(10),
      map(corp => {
        corp.data['corporation_id'] = corpId;
        return corp.data;
      }),
    );

  convertESItoModel = (alliance: ESIAlliance) =>
    of({
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
    } as Alliance);
}
