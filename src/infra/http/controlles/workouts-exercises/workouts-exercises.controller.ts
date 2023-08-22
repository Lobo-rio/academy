import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { CreateWorkoutsExerciseDto } from 'src/domain/workouts-exercises/dto/create-workouts-exercise.dto';
import { UpdateWorkoutsExerciseDto } from 'src/domain/workouts-exercises/dto/update-workouts-exercise.dto';
import { WorkoutsExercisesService } from 'src/domain/workouts-exercises/service/workouts-exercises.service';

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
  findOne(@Param('id') id: string) {
    return this.workoutsExercisesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateWorkoutsExerciseDto: UpdateWorkoutsExerciseDto,
  ) {
    return this.workoutsExercisesService.update(+id, updateWorkoutsExerciseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workoutsExercisesService.remove(+id);
  }
}
