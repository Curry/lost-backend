import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SolarSystem } from './models/SolarSystems.entity';
import { System, Static } from './structures/system';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class EntityService {
  constructor(
    @InjectRepository(SolarSystem)
    private readonly systemRepository: Repository<SolarSystem>,
  ) {}

  findOne = (id: number): Observable<System[]> =>
    from(this.systemRepository.find({ solarSystemID: id })).pipe(
      map(val => val.map(this.cleanUp)),
    );

  findSystemByName = (name: string): Observable<System> =>
    from(this.systemRepository.findOne({ solarSystemName: name })).pipe(
      map(this.cleanUp),
    );

  cleanUp = (data: SolarSystem): System =>
    ({
      regionID: data.regionID,
      constellationID: data.constellationID,
      solarSystemID: data.solarSystemID,
      solarSystemName: data.solarSystemName,
      security: data.security,
      class: data.class.wormholeClassID,
      statics: data.statics.map(staticInfo => new Static(staticInfo)),
    } as System);
}
