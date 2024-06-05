import { Test, TestingModule } from '@nestjs/testing';
import { ChanceService } from './chance.service';

describe('ChanceService', () => {
  let service: ChanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChanceService],
    }).compile();

    service = module.get<ChanceService>(ChanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
