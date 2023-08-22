import { Module } from '@nestjs/common';

import { HistoricalTrainingController } from 'src/infra/http/controlles/historical-training/historical-training.controller';
import { HistoricalTrainingService } from './service/historical-training.service';

@Module({
  controllers: [HistoricalTrainingController],
  providers: [HistoricalTrainingService],
})
export class HistoricalTrainingModule {}
