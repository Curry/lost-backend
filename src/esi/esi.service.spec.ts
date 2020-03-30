import { Test, TestingModule } from '@nestjs/testing';
import { EsiService } from './esi.service';

describe('EsiService', () => {
  let service: EsiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EsiService],
    }).compile();

    service = module.get<EsiService>(EsiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
