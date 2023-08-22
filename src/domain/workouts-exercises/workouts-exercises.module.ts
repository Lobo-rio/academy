import { Module } from '@nestjs/common';

import { WorkoutsExercisesService } from './service/workouts-exercises.service';
import { WorkoutsExercisesController } from 'src/infra/http/controlles/workouts-exercises/workouts-exercises.controller';

@Module({
  controllers: [WorkoutsExercisesController],
  providers: [WorkoutsExercisesService],
})
export class WorkoutsExercisesModule {}
