import { Module } from '@nestjs/common';
import { EsiService } from './esi.service';
import { EsiController } from './esi.controller';

@Module({
  exports: [EsiService],
  providers: [EsiService],
  controllers: [EsiController]
})
export class EsiModule {}
