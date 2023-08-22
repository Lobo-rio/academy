import { Module } from '@nestjs/common';
import { ExercisesService } from './service/exercises.service';
import { ExercisesController } from '../../infra/http/controlles/exercises/exercises.controller';

@Module({
  controllers: [ExercisesController],
  providers: [ExercisesService],
})
export class ExercisesModule {}
