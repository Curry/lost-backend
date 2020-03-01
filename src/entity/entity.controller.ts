import { Controller, Get, Param } from '@nestjs/common';
import { EntityService } from './entity.service';
import { System } from './structures/system';
import { Observable } from 'rxjs';

@Controller('system')
export class EntityController {
  constructor(private readonly service: EntityService) {}

  @Get(':name')
  findOne(@Param('name') name: string): Observable<System> {
    return this.service.findSystemByName(name)
  }
}
