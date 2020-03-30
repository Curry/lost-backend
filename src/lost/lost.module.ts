import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { System } from './entity/system.entity';
import { Map } from './entity/map.entity';
import { Connection } from './entity/connection.entity';
import { LostService } from './lost.service';
import { SSOStrategy } from './sso.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [TypeOrmModule.forFeature([Map, Connection, System], 'data'), PassportModule],
  exports: [LostService, SSOStrategy],
  providers: [LostService, SSOStrategy],
})
export class LostModule {}
