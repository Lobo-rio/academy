import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { ExercisesService } from '../../../../domain/exercises/service/exercises.service';
import { CreateExerciseDto } from '../../../../domain/exercises/dto/create-exercise.dto';
import { UpdateExerciseDto } from '../../../../domain/exercises/dto/update-exercise.dto';

import { CreateTodoSwagger } from '../../../../helppers/swagger/response/exercises/create-todo.swagger';

import { BadRequestExceptionsSwagger } from '../../../../helppers/swagger/errors/bad-request-exception';
import { InternalServerErrorExceptionsSwagger } from '../../../../helppers/swagger/errors/internal-server-error-exception';

@Controller('api/exercises')
@ApiTags('Exercises')
export class ExercisesController {
  constructor(private readonly exercisesService: ExercisesService) {}

  @Post()
  @ApiOperation({ summary: 'Create exercise' })
  @ApiResponse({ 
      status:  201, 
      description: 'New exercise successfully created',
      type: CreateTodoSwagger,
  })
  @ApiResponse({ 
      status:  400, 
      description: 'Invalid parameters',
      type: BadRequestExceptionsSwagger, 
  })
  @ApiResponse({ 
      status:  500, 
      description: 'Internal server errors',
      type: InternalServerErrorExceptionsSwagger, 
  })
  create(@Body() createExerciseDto: CreateExerciseDto) {
    return this.exercisesService.create(createExerciseDto);
  }

  @Get()
  findAll() {
    return this.exercisesService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.exercisesService.findById(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateExerciseDto: UpdateExerciseDto,
  ) {
    return this.exercisesService.update(id, updateExerciseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exercisesService.remove(id);
  }
}
