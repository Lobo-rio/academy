import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { CreateHistoricalTrainingDto } from 'src/domain/historical-training/dto/create-historical-training.dto';
import { UpdateHistoricalTrainingDto } from 'src/domain/historical-training/dto/update-historical-training.dto';
import { HistoricalTrainingService } from 'src/domain/historical-training/service/historical-training.service';

@Controller('historical-training')
export class HistoricalTrainingController {
  constructor(
    private readonly historicalTrainingService: HistoricalTrainingService,
  ) {}

  @Post()
  create(@Body() createHistoricalTrainingDto: CreateHistoricalTrainingDto) {
    return this.historicalTrainingService.create(createHistoricalTrainingDto);
  }

  @Get()
  findAll() {
    return this.historicalTrainingService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.historicalTrainingService.findById(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHistoricalTrainingDto: UpdateHistoricalTrainingDto,
  ) {
    return this.historicalTrainingService.update(
      id,
      updateHistoricalTrainingDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.historicalTrainingService.remove(id);
  }
}
