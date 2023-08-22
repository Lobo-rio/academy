import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TrainingService } from './service/training.service';
import { TrainingController } from '../../infra/http/controlles/training/training.controller';
import { Training } from '../../infra/database/entities/training.entity';
import { TrainingsRepository } from '../../infra/database/repositories/trainings.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Training]),
  ],
  controllers: [TrainingController],
  providers: [
    TrainingService,
    {
      provide: "ITrainingsRepository",
      useClass: TrainingsRepository,
    },
  ],
  exports: [TrainingService],
})
export class TrainingModule {}
