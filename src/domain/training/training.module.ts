import { Module } from '@nestjs/common';

import { TrainingService } from './service/training.service';
import { TrainingController } from 'src/infra/http/controlles/training/training.controller';

@Module({
  controllers: [TrainingController],
  providers: [TrainingService],
})
export class TrainingModule {}
