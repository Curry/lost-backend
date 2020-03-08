import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityService } from './entity.service';
import { EntityController } from './entity.controller';
import { Alliance } from './data/alliance.db';
import { Faction } from './data/faction.db';
import { Category } from './data/category.db';
import { Group } from './data/group.db';
import { Type } from './data/type.db';
import { Constellation } from './data/constellation.db';
import { Corporation } from './data/corporation.db';
import { Region } from './data/region.db';
import { System } from './data/system.db';
import { TypeAttribute } from './data/typeAttribute.db';
import { SystemStatic } from './data/systemStatic.db';
import { AttributeType } from './data/attributeType.db';
import { Star } from './data/star.db';

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
      Star
    ]),
  ],
  providers: [EntityService],
  controllers: [EntityController],
})
export class EntityModule {}
