import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { System } from './data/system.db';
import { SystemModel } from './structures/system';
import { Corporation } from './data/corporation.db';
import { Star } from './data/star.db';

@Injectable()
export class EntityService {
  constructor(
    @InjectRepository(System)
    private readonly systemRepo: Repository<System>,
    @InjectRepository(Corporation)
    private readonly corpRepo: Repository<Corporation>,
    @InjectRepository(Star)
    private readonly star: Repository<Star>,
  ) {}

  findSystemByName = (name: string): Observable<SystemModel> =>
    from(this.systemRepo.findOne({ systemName: name })).pipe(
      map(val => new SystemModel(val))
    )

  findCorpById = (id: number): Observable<Corporation> =>
    from(this.corpRepo.findOne(id))

  findTest = () => from(this.star.findOne(40000001))
}
