import { Test, TestingModule } from '@nestjs/testing';

import { HistoricalTrainingController } from './historical-training.controller';
import { HistoricalTrainingService } from 'src/domain/historical-training/service/historical-training.service';

describe('HistoricalTrainingController', () => {
  let controller: HistoricalTrainingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HistoricalTrainingController],
      providers: [HistoricalTrainingService],
    }).compile();

    controller = module.get<HistoricalTrainingController>(
      HistoricalTrainingController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
