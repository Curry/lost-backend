import { Controller, Get, Param } from '@nestjs/common';
import { System } from './structures/system';
import { Observable } from 'rxjs';
import { EntityService } from './entity.service';

@Controller('entity')
export class EntityController {
  constructor(private readonly service: EntityService) {}

  @Get('/system/:name')
  findOne(@Param('name') name: string): Observable<System> {
    return this.service.findSystemByName(name);
  }
}
