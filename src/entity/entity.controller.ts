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
    // this.service.findAlliances().subscribe(val => {
    //   console.log(val);
    // })
    // return '';
    return this.service.findAlliances();
    // return this.service.delete();
  }

  @Get('/test2')
  findTest2() {
    // this.service.findAlliances().subscribe(val => {
    //   console.log(val);
    // })
    // return '';
    // return this.service.findAlliances();
    return this.service.delete();
  }
}
