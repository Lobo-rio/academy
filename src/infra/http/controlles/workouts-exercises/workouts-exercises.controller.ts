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

import { CreateWorkoutsExerciseDto } from '../../../../domain/workouts-exercises/dto/create-workouts-exercise.dto';
import { UpdateWorkoutsExerciseDto } from '../../../../domain/workouts-exercises/dto/update-workouts-exercise.dto';
import { WorkoutsExercisesService } from '../../../../domain/workouts-exercises/service/workouts-exercises.service';

import { CreateTodoSwagger } from 'src/helppers/swagger/response/workouts-exercises/create-todo.swagger';
import { BadRequestExceptionsSwagger } from 'src/helppers/swagger/errors/bad-request-exception';
import { InternalServerErrorExceptionsSwagger } from 'src/helppers/swagger/errors/internal-server-error-exception';
import { FindTodoSwagger } from 'src/helppers/swagger/response/workouts-exercises/find-todo.swagger';
import { NotFoundExceptionsSwagger } from 'src/helppers/swagger/errors/not-found-exception';
 
@Controller('api/workouts-exercises')
@ApiTags('Workouts Exercises')
export class WorkoutsExercisesController {
  constructor(
    private readonly workoutsExercisesService: WorkoutsExercisesService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create workout exercise' })
  @ApiResponse({ 
      status:  201, 
      description: 'New workout exercise successfully created',
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
  create(@Body() createWorkoutsExerciseDto: CreateWorkoutsExerciseDto) {
    return this.workoutsExercisesService.create(createWorkoutsExerciseDto);
  }

  @Get()
  @ApiOperation({ summary: 'List workouts exercises' })
  @ApiResponse({ 
      status:  200, 
      description: 'Returns a list of all registered workouts exercises',
      type: FindTodoSwagger,
  })
  @ApiResponse({ 
      status:  500, 
      description: 'Internal server errors',
      type: InternalServerErrorExceptionsSwagger, 
  })
  findAll() {
    return this.workoutsExercisesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Return workout exercise' })
  @ApiResponse({ 
      status:  200, 
      description: 'Returns a registered workout exercise, with the identifier that was informed',
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
    return this.workoutsExercisesService.findById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update workout exercise' })
  @ApiResponse({ 
      status:  200, 
      description: 'Update workout exercise information',
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
    @Body() updateWorkoutsExerciseDto: UpdateWorkoutsExerciseDto,
  ) {
    return this.workoutsExercisesService.update(id, updateWorkoutsExerciseDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete workout exercise' })
  @ApiResponse({ 
      status:  200, 
      description: 'Remove workout exercise information',
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
    return this.workoutsExercisesService.remove(id);
  }
}
