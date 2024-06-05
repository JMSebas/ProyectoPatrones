import { Test, TestingModule } from '@nestjs/testing';
import { ChanceController } from './chance.controller';

describe('ChanceController', () => {
  let controller: ChanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChanceController],
    }).compile();

    controller = module.get<ChanceController>(ChanceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
