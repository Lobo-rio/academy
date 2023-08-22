import { Test, TestingModule } from '@nestjs/testing';
import { HistoricalTrainingService } from './historical-training.service';

describe('HistoricalTrainingService', () => {
  let service: HistoricalTrainingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HistoricalTrainingService],
    }).compile();

    service = module.get<HistoricalTrainingService>(HistoricalTrainingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
