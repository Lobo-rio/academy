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

import { CreateHistoricalTrainingDto } from '../../../../domain/historical-training/dto/create-historical-training.dto';
import { UpdateHistoricalTrainingDto } from '../../../../domain/historical-training/dto/update-historical-training.dto';
import { HistoricalTrainingService } from '../../../../domain/historical-training/service/historical-training.service';

import { BadRequestExceptionsSwagger } from '../../../../helppers/swagger/errors/bad-request-exception';
import { InternalServerErrorExceptionsSwagger } from '../../../../helppers/swagger/errors/internal-server-error-exception';
import { NotFoundExceptionsSwagger } from '../../../../helppers/swagger/errors/not-found-exception';

import { CreateTodoSwagger } from '../../../../helppers/swagger/response/historical-training/create-todo.swagger';
import { FindTodoSwagger } from '../../../../helppers/swagger/response/historical-training/find-todo.swagger';

@Controller('api/historical-training')
@ApiTags('Historical Training')
export class HistoricalTrainingController {
  constructor(
    private readonly historicalTrainingService: HistoricalTrainingService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create historical training' })
  @ApiResponse({ 
      status:  201, 
      description: 'New historical training successfully created',
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
  create(@Body() createHistoricalTrainingDto: CreateHistoricalTrainingDto) {
    return this.historicalTrainingService.create(createHistoricalTrainingDto);
  }

  @Get()
  @ApiOperation({ summary: 'List historical trainings' })
  @ApiResponse({ 
      status:  200, 
      description: 'Returns a list of all registered historical trainings',
      type: FindTodoSwagger,
  })
  @ApiResponse({ 
      status:  500, 
      description: 'Internal server errors',
      type: InternalServerErrorExceptionsSwagger, 
  })
  findAll() {
    return this.historicalTrainingService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Return historical training' })
  @ApiResponse({ 
      status:  200, 
      description: 'Returns a registered historical training, with the identifier that was informed',
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
    return this.historicalTrainingService.findById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update historical training' })
  @ApiResponse({ 
      status:  200, 
      description: 'Update historical training information',
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
    @Body() updateHistoricalTrainingDto: UpdateHistoricalTrainingDto,
  ) {
    return this.historicalTrainingService.update(
      id,
      updateHistoricalTrainingDto,
    );
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete historical training' })
  @ApiResponse({ 
      status:  200, 
      description: 'Remove historical training information',
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
    return this.historicalTrainingService.remove(id);
  }
}
