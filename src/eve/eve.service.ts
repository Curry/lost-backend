import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { Observable, from } from 'rxjs';
import { SystemModel } from '../models/system.model';
import { map, catchError } from 'rxjs/operators';
import { System } from './entity/system.entity';
import { Corporation } from './entity/corporation.entity';
import { Alliance } from './entity/alliance.entity';

@Injectable()
export class EveService {
  constructor(
    @InjectRepository(System, 'eve')
    private readonly systemRepo: Repository<System>,
    @InjectRepository(Corporation, 'eve')
    private readonly corpRepo: Repository<Corporation>,
    @InjectRepository(Alliance, 'eve')
    private readonly allianceRepo: Repository<Alliance>,
  ) {}

  findSystemById = (id: number): Observable<SystemModel> =>
    from(this.systemRepo.findOne(id)).pipe(
      map(val => new SystemModel(val)),
      catchError(() => {
        throw new NotFoundException();
      }),
    );

  findConnectionSystems = (sourceId: number, destId: number) =>
    from(this.systemRepo.findByIds([sourceId, destId])).pipe(
      map(([source, dest]) => ({
        source: new SystemModel(source),
        destination: new SystemModel(dest),
      })),
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
  
}
