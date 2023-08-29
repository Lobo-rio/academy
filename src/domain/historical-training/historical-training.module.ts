import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
 
import { HistoricalTrainingController } from '../../infra/http/controlles/historical-training/historical-training.controller';
import { HistoricalTrainingService } from './service/historical-training.service';
import { HistoricalTraining } from '../../infra/database/entities/historical-training.entity';
import { Member } from '../../infra/database/entities/member.entity';
import { Training } from '../../infra/database/entities/training.entity';
import { HistoricalTrainingRepository } from '../../infra/database/repositories/historical-training.repository';
import { MembersRepository } from '../../infra/database/repositories/members.repository';
import { TrainingsRepository } from '../../infra/database/repositories/trainings.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      HistoricalTraining,
      Member,
      Training,
    ]),
  ],
  controllers: [HistoricalTrainingController],
  providers: [
    HistoricalTrainingService,
    {
      provide: "IHistoricalTrainingRepository",
      useClass: HistoricalTrainingRepository,
    },
    {
      provide: "IMembersRepository",
      useClass: MembersRepository,
    },
    {
      provide: "ITrainingsRepository",
      useClass: TrainingsRepository,
    },
  ],
  exports: [HistoricalTrainingService],
})
export class HistoricalTrainingModule {}
