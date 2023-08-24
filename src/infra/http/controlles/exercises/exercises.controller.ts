import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { ExercisesService } from '../../../../domain/exercises/service/exercises.service';
import { CreateExerciseDto } from '../../../../domain/exercises/dto/create-exercise.dto';
import { UpdateExerciseDto } from '../../../../domain/exercises/dto/update-exercise.dto';

import { CreateTodoSwagger } from '../../../../helppers/swagger/response/exercises/create-todo.swagger';
import { FindTodoSwagger } from '../../../../helppers/swagger/response/exercises/find-todo.swagger';

import { BadRequestExceptionsSwagger } from '../../../../helppers/swagger/errors/bad-request-exception';
import { InternalServerErrorExceptionsSwagger } from '../../../../helppers/swagger/errors/internal-server-error-exception';
import { NotFoundExceptionsSwagger } from '../../../../helppers/swagger/errors/not-found-exception';

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
  @ApiOperation({ summary: 'List exercises' })
  @ApiResponse({ 
      status:  200, 
      description: 'Returns a list of all registered exercises',
      type: FindTodoSwagger,
  })
  @ApiResponse({ 
      status:  500, 
      description: 'Internal server errors',
      type: InternalServerErrorExceptionsSwagger, 
  })
  findAll() {
    return this.exercisesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Return exercise' })
  @ApiResponse({ 
      status:  200, 
      description: 'Returns a registered exercise, with the identifier that was informed',
      type: FindTodoSwagger,
  })
  @ApiResponse({ 
      status:  400, 
      description: 'Invalid parameters',
      type: NotFoundExceptionsSwagger, 
  })
  @ApiResponse({ 
      status:  500, 
      description: 'Internal server errors',
      type: InternalServerErrorExceptionsSwagger, 
  })
  findById(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.exercisesService.findById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update exercise' })
  @ApiResponse({ 
      status:  200, 
      description: 'Update exercise information',
  })
  @ApiResponse({ 
      status:  400, 
      description: 'Invalid parameters',
      type: NotFoundExceptionsSwagger, 
  })
  @ApiResponse({ 
      status:  500, 
      description: 'Internal server errors',
      type: InternalServerErrorExceptionsSwagger, 
  })
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateExerciseDto: UpdateExerciseDto,
  ) {
    return this.exercisesService.update(id, updateExerciseDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete exercise' })
  @ApiResponse({ 
      status:  200, 
      description: 'Remove exercise information',
  })
  @ApiResponse({ 
      status:  400, 
      description: 'Invalid parameters',
      type: NotFoundExceptionsSwagger, 
  })
  @ApiResponse({ 
      status:  500, 
      description: 'Internal server errors',
      type: InternalServerErrorExceptionsSwagger, 
  })
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.exercisesService.remove(id);
  }
}
