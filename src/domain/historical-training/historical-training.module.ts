import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
 
import { HistoricalTrainingController } from '../../infra/http/controlles/historical-training/historical-training.controller';
import { HistoricalTrainingService } from './service/historical-training.service';
import { HistoricalTraining } from '../../infra/database/entities/historical-training.entity';
import { HistoricalTrainingRepository } from '../../infra/database/repositories/historical-training.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([HistoricalTraining]),
  ],
  controllers: [HistoricalTrainingController],
  providers: [
    HistoricalTrainingService,
    {
      provide: "IHistoricalTrainingRepository",
      useClass: HistoricalTrainingRepository,
    },
  ],
  exports: [HistoricalTrainingService],
})
export class HistoricalTrainingModule {}
