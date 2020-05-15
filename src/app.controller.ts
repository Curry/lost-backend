import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  UseGuards,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service';
import { System } from './eve/entity/system.entity';
import { Connection } from './lost/entity/connection.entity';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';

@Controller('/')
export class AppController {
  constructor(private readonly service: AppService) {}

  @Get('/test')
  test() {
  }

  @UseGuards(AuthGuard('oauth2'))
  @Get('/sso')
  login() {
    return;
  }

  @UseGuards(AuthGuard('oauth2'))
  @Get('/callback')
  callback(@Res() res: Response) {
    res.redirect('http://localhost:4200/');
  }

  @Get('/map/:mapId/systems')
  getMapSystems(@Param('mapId') mapId: number) {
    return this.service.getSystemsByMap(mapId);
  }

  @Post('/map/:mapId/system/:systemId/update')
  updateSystem(
    @Param('mapId') mapId: number,
    @Param('systemId') systemId: number,
    @Body() system: Partial<System>,
  ) {
    return this.service.updateSystem(mapId, systemId, system);
  }

  @Post('/map/:mapId/system/add')
  addNewSystem(
    @Param('mapId') mapId: number,
    @Body('systemId') systemId: number,
    @Body('active') active: boolean,
    @Body('alias') alias: string,
  ) {
    return this.service.addNewSystem(mapId, systemId, active, alias);
  }

  @Get('/map/:mapId/connections')
  getMapConnections(@Param('mapId') mapId: number) {
    return this.service.getConnectionsByMap(mapId);
  }

  @Post('/map/:id/connection/:connectionId/update')
  updateConnection(
    @Param('connectionId') connectionId: number,
    @Body() connection: Partial<Connection>,
  ) {
    return this.service.updateConnection(connectionId, connection);
  }

  @Post('/map/:mapId/connection/add')
  addNewConnection(
    @Param('mapId') mapId: number,
    @Body('source') source: number,
    @Body('target') target: number,
  ) {
    return this.service.addNewConnection(mapId, source, target);
  }
}
