import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { System } from './entity/system.entity';
import { SystemStatic } from './entity/systemStatic.entity';
import { TypeAttribute } from './entity/typeAttribute.entity';
import { AttributeType } from './entity/attributeType.entity';
import { Constellation } from './entity/constellation.entity';
import { Region } from './entity/region.entity';
import { Alliance } from './entity/alliance.entity';
import { Corporation } from './entity/corporation.entity';
import { Faction } from './entity/faction.entity';
import { Group } from './entity/group.entity';
import { Category } from './entity/category.entity';
import { Star } from './entity/star.entity';
import { Race } from './entity/race.entity';
import { Station } from './entity/station.entity';
import { SystemNeighbor } from './entity/systemNeighbor.entity';
import { Type } from './entity/type.entity';
import { EveService } from './eve.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([
          System,
          SystemStatic,
          Type,
          TypeAttribute,
          AttributeType,
          Constellation,
          Region,
          Alliance,
          Corporation,
          Faction,
          Group,
          Category,
          Star,
          Race,
          Station,
          Category,
          SystemNeighbor,
        ], 'eve'),
    ],
    exports: [EveService],
    providers: [EveService]
})
export class EveModule {}
