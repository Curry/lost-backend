import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { EveService } from './eve/eve.service';
import { LostService } from './lost/lost.service';
import { mergeMap, map, combineAll } from 'rxjs/operators';
import { from } from 'rxjs';

@Controller('/')
export class AppController {
  constructor(
    private readonly service: AppService,
    private readonly eveService: EveService,
    private readonly lostService: LostService,
  ) {}

  @Get('/token/:code')
  getEsiToken(@Param('code') code: string) {
    return this.service.getESIAuth(code);
  }

  @Get('token/refresh/:token')
  refreshEsiToken(@Param('token') token: string) {
    return this.service.refreshESIToken(token);
  }

  @Get('/map/:id/systems')
  getMapSystems(@Param('id') id: number) {
    return this.lostService.getSystemsByMapId(id).pipe(
      mergeMap(systems =>
        from(systems).pipe(
          map(system => this.eveService.findSystemById(system.systemId)),
          combineAll(),
        ),
      ),
    );
  }

  @Get('/map/:id/connections')
  getMapConnections(@Param('id') id: number) {
    return this.lostService.getConnectionsByMapId(id);
  }
}
