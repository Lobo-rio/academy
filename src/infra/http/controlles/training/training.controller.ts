import { AuthGuard } from '@nestjs/passport';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { TrainingService } from '../../../../domain/training/service/training.service';

import { CreateTrainingDto } from '../../../../domain/training/dto/create-training.dto';
import { UpdateTrainingDto } from '../../../../domain/training/dto/update-training.dto';

import { CreateTodoSwagger } from '../../../../helppers/swagger/response/trainings/create-todo.swagger';
import { FindTodoSwagger } from '../../../../helppers/swagger/response/trainings/find-todo.swagger';

import { BadRequestExceptionsSwagger } from '../../../../helppers/swagger/errors/bad-request-exception';
import { InternalServerErrorExceptionsSwagger } from '../../../../helppers/swagger/errors/internal-server-error-exception';
import { NotFoundExceptionsSwagger } from '../../../../helppers/swagger/errors/not-found-exception';

@Controller('api/trainings')
@ApiTags('Trainings')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
export class TrainingController {
  constructor(private readonly trainingService: TrainingService) {}

  @Post()
  @ApiOperation({ summary: 'Create training' })
  @ApiResponse({ 
      status:  201, 
      description: 'New training successfully created',
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
  create(@Body() createTrainingDto: CreateTrainingDto) {
    return this.trainingService.create(createTrainingDto);
  }

  @Get()
  @ApiOperation({ summary: 'List trainings' })
  @ApiResponse({ 
      status:  200, 
      description: 'Returns a list of all registered trainings',
      type: FindTodoSwagger,
  })
  @ApiResponse({ 
      status:  500, 
      description: 'Internal server errors',
      type: InternalServerErrorExceptionsSwagger, 
  })
  findAll() {
    return this.trainingService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Return training' })
  @ApiResponse({ 
      status:  200, 
      description: 'Returns a registered training, with the identifier that was informed',
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
  findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.trainingService.findById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update training' })
  @ApiResponse({ 
      status:  200, 
      description: 'Update training information',
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
    @Body() updateTrainingDto: UpdateTrainingDto,
  ) {
    return this.trainingService.update(id, updateTrainingDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete training' })
  @ApiResponse({ 
      status:  200, 
      description: 'Remove training information',
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
    return this.trainingService.remove(id);
  }
}
