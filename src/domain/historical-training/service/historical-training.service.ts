import { Injectable } from '@nestjs/common';

import { CreateHistoricalTrainingDto } from '../dto/create-historical-training.dto';
import { UpdateHistoricalTrainingDto } from '../dto/update-historical-training.dto';

@Injectable()
export class HistoricalTrainingService {
  create(createHistoricalTrainingDto: CreateHistoricalTrainingDto) {
    return 'This action adds a new historicalTraining';
  }

  findAll() {
    return `This action returns all historicalTraining`;
  }

  findOne(id: number) {
    return `This action returns a #${id} historicalTraining`;
  }

  update(id: number, updateHistoricalTrainingDto: UpdateHistoricalTrainingDto) {
    return `This action updates a #${id} historicalTraining`;
  }

  remove(id: number) {
    return `This action removes a #${id} historicalTraining`;
  }
}
