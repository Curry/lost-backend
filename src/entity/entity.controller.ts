import { Controller, Get, Param } from '@nestjs/common';
import { Observable } from 'rxjs';
import { EntityService } from './entity.service';
import { SystemModel } from './models/system';

@Controller('entity')
export class EntityController {
  constructor(private readonly service: EntityService) {}

  @Get('/system/:name')
  findOne(@Param('name') name: string): Observable<SystemModel> {
    return this.service.findSystemByName(name);
  }

  @Get('/system/search/:name')
  searchSystem(@Param('name') name: string): Observable<string[]> {
    return this.service.findSystemsByName(name);
  }
  @Get('/corp/:id')
  findId(@Param('id') id: number) {
    return this.service.findCorpById(id);
  }

  @Get('/alliance/:id')
  findAlliance(@Param('id') id: number) {
    return this.service.findAllianceById(id);
  }

  @Get('/route/:src/:dest')
  findRoute(@Param('src') src: number, @Param('dest') dest: number) {
    return this.service.findRoute(src, dest);
  }

  @Get('/test')
  findTest() {
    return this.service.findAlliances();
  }

  @Get('/te')
  ngInfo() {
    return this.service.getInfo()
  }
}
