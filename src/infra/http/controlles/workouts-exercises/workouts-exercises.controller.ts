import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { CreateWorkoutsExerciseDto } from '../../../../domain/workouts-exercises/dto/create-workouts-exercise.dto';
import { UpdateWorkoutsExerciseDto } from '../../../../domain/workouts-exercises/dto/update-workouts-exercise.dto';
import { WorkoutsExercisesService } from '../../../../domain/workouts-exercises/service/workouts-exercises.service';

@Controller('workouts-exercises')
export class WorkoutsExercisesController {
  constructor(
    private readonly workoutsExercisesService: WorkoutsExercisesService,
  ) {}

  @Post()
  create(@Body() createWorkoutsExerciseDto: CreateWorkoutsExerciseDto) {
    return this.workoutsExercisesService.create(createWorkoutsExerciseDto);
  }

  @Get()
  findAll() {
    return this.workoutsExercisesService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.workoutsExercisesService.findById(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateWorkoutsExerciseDto: UpdateWorkoutsExerciseDto,
  ) {
    return this.workoutsExercisesService.update(id, updateWorkoutsExerciseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workoutsExercisesService.remove(id);
  }
}
