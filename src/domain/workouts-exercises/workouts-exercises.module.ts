import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { WorkoutsExercisesService } from './service/workouts-exercises.service';
import { WorkoutsExercisesController } from '../../infra/http/controlles/workouts-exercises/workouts-exercises.controller';
import { WorkoutsExercise } from '../../infra/database/entities/workouts-exercise.entity';
import { Training } from '../../infra/database/entities/training.entity';
import { Exercise } from '../../infra/database/entities/exercise.entity';
import { WorkoutsExercisesRepository } from '../../infra/database/repositories/workouts-exercises.repository';
import { TrainingsRepository } from '../../infra/database/repositories/trainings.repository';
import { ExercisesRepository } from '../../infra/database/repositories/exercises.repository';
 
@Module({
  imports: [
    TypeOrmModule.forFeature([
      WorkoutsExercise,
      Training, 
      Exercise,
    ]),
  ],
  controllers: [WorkoutsExercisesController],
  providers: [
    WorkoutsExercisesService,
    {
      provide: "IWorkoutsExercisesRepository",
      useClass: WorkoutsExercisesRepository,
    },
    {
      provide: "ITrainingsRepository",
      useClass: TrainingsRepository,
    },
    {
      provide: "IExercisesRepository",
      useClass: ExercisesRepository,
    },
  ],
  exports: [WorkoutsExercisesService],
})
export class WorkoutsExercisesModule {}
