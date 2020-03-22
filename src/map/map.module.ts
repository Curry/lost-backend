import { Module } from '@nestjs/common';
import { MapService } from './map.service';
import { MapController } from './map.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Map } from './data/map.db';
import { Connection } from './data/connection.db';
import { System } from './data/system.db';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Map,
            Connection,
            System
        ], 'lost'),
      ],
      exports: [MapService],
      providers: [MapService],
      controllers: [MapController],
})
export class MapModule {}
