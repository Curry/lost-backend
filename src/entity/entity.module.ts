import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WormholeClasses } from './static/wormholeClasses.entity';
import { EntityService } from './entity.service';
import { EntityController } from './entity.controller';
import { SolarSystem } from './static/solarSystems.entity';
import { InvType } from './static/invType.entity';
import { DgmTypeAttribute } from './static/dgmTypeAttribute.entity';
import { DgmAttributeType } from './static/dgmAttributeType.entity';
import { MapStatic } from './static/mapStatic.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      WormholeClasses,
      SolarSystem,  
      InvType,
      DgmTypeAttribute,
      DgmAttributeType,
      MapStatic,
    ]),
  ],
  providers: [EntityService],
  controllers: [EntityController],
})
export class EntityModule {}
