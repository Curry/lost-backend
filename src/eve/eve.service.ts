import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { Observable, from } from 'rxjs';
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

  findSystemById = (id: number): Observable<System> =>
    from(this.systemRepo.findOne(id)).pipe(
      catchError(() => {
        throw new NotFoundException();
      }),
    );

  findSystemByName = (name: string): Observable<System> =>
    from(this.systemRepo.findOne({ systemName: name })).pipe(
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
