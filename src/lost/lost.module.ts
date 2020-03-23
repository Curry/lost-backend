import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { System } from './entity/system.entity';
import { Map } from './entity/map.entity';
import { Connection } from './entity/connection.entity';
import { LostService } from './lost.service';

@Module({
  imports: [TypeOrmModule.forFeature([Map, Connection, System], 'data')],
  exports: [LostService],
  providers: [LostService],
})
export class LostModule {}
