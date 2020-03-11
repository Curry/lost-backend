import { Injectable, HttpService } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { from, Observable, forkJoin } from 'rxjs';
import { map, exhaustMap } from 'rxjs/operators';
import { System } from './data/system.db';
import { SystemModel } from './models/system';
import { Corporation } from './data/corporation.db';
import { SystemNeighbor } from './data/systemNeighbor.db';

@Injectable()
export class EntityService {
  constructor(
    @InjectRepository(System)
    private readonly systemRepo: Repository<System>,
    @InjectRepository(Corporation)
    private readonly corpRepo: Repository<Corporation>,
    @InjectRepository(SystemNeighbor)
    private readonly test: Repository<SystemNeighbor>,
    private readonly http: HttpService,
  ) {}

  private esiUrl = 'https://esi.evetech.net/latest';

  findSystemByName = (name: string): Observable<SystemModel> =>
    from(this.systemRepo.findOne({ systemName: name })).pipe(
      map(val => new SystemModel(val)),
    );

  findCorpById = (id: number) => from(this.corpRepo.findOne(id));

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
}
