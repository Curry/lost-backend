import { Test, TestingModule } from '@nestjs/testing';
import { EsiController } from './esi.controller';

describe('Esi Controller', () => {
  let controller: EsiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EsiController],
    }).compile();

    controller = module.get<EsiController>(EsiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
