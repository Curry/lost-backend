
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WormholeClasses } from './models/wormholeClasses.entity';
import { EntityService } from './entity.service';
import { EntityController } from './entity.controller';
import { SolarSystem } from './models/SolarSystems.entity';
import { StaticMap } from './models/staticMap.entity';
import { InvType } from './models/invType.entity';
import { DgmTypeAttribute } from './models/dgmTypeAttribute.entity';
import { DgmAttributeType } from './models/dgmAttributeType.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WormholeClasses, SolarSystem, StaticMap, InvType, DgmTypeAttribute, DgmAttributeType])],
  providers: [EntityService],
  controllers: [EntityController],
})
export class EntityModule {}
