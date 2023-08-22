import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { CreateTrainingDto } from 'src/domain/training/dto/create-training.dto';
import { UpdateTrainingDto } from 'src/domain/training/dto/update-training.dto';
import { TrainingService } from 'src/domain/training/service/training.service';

@Controller('training')
export class TrainingController {
  constructor(private readonly trainingService: TrainingService) {}

  @Post()
  create(@Body() createTrainingDto: CreateTrainingDto) {
    return this.trainingService.create(createTrainingDto);
  }

  @Get()
  findAll() {
    return this.trainingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trainingService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTrainingDto: UpdateTrainingDto,
  ) {
    return this.trainingService.update(+id, updateTrainingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trainingService.remove(+id);
  }
}
