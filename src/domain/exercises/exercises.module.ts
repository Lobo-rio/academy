import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ExercisesService } from './service/exercises.service';
import { ExercisesController } from '../../infra/http/controlles/exercises/exercises.controller';
import { Exercise } from '../../infra/database/entities/exercise.entity';
import { ExercisesRepository } from '../../infra/database/repositories/exercises.repository';
 
@Module({
  imports: [
    TypeOrmModule.forFeature([Exercise]),
  ],
  controllers: [ExercisesController],
  providers: [
    ExercisesService,
    {
      provide: "IExercisesRepository",
      useClass: ExercisesRepository,
    },
  ],
  exports: [ExercisesService],
})
export class ExercisesModule {}
