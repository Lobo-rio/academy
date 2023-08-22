import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { WorkoutsExercisesService } from './service/workouts-exercises.service';
import { WorkoutsExercisesController } from '../../infra/http/controlles/workouts-exercises/workouts-exercises.controller';
import { WorkoutsExercise } from '../../infra/database/entities/workouts-exercise.entity';
import { WorkoutsExercisesRepository } from '../../infra/database/repositories/workouts-exercises.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([WorkoutsExercise]),
  ],
  controllers: [WorkoutsExercisesController],
  providers: [
    WorkoutsExercisesService,
    {
      provide: "IWorkoutsExercisesRepository",
      useClass: WorkoutsExercisesRepository,
    },
  ],
  exports: [WorkoutsExercisesService],
})
export class WorkoutsExercisesModule {}
