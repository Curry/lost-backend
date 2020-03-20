import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/')
export class AppController {
  constructor(private readonly service: AppService) {}

  @Get('/token/:code')
  getEsiToken(@Param('code') code: string) {
    return this.service.getESIAuth(code);
  }

  @Get('token/refresh/:token')
  refreshEsiToken(@Param('token') token: string) {
    return this.service.refreshESIToken(token);
  }
}
