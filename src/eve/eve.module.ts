import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { System } from './entity/system.entity';
import { Constellation } from './entity/constellation.entity';
import { Region } from './entity/region.entity';
import { Alliance } from './entity/alliance.entity';
import { Corporation } from './entity/corporation.entity';
import { Faction } from './entity/faction.entity';
import { Race } from './entity/race.entity';
import { EveService } from './eve.service';
import { Static } from './entity/static.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([
          System,
          Static,
          Constellation,
          Region,
          Alliance,
          Corporation,
          Faction,
          Race,
        ], 'eve'),
    ],
    exports: [EveService],
    providers: [EveService]
})
export class EveModule {}
