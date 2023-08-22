import { Inject, Injectable } from '@nestjs/common';

import { CreateHistoricalTrainingDto } from '../dto/create-historical-training.dto';
import { UpdateHistoricalTrainingDto } from '../dto/update-historical-training.dto';
import { IHistoricalTrainingRepository } from '../repository/historical-training-abstract.repository';

@Injectable()
export class HistoricalTrainingService {
  constructor(
    @Inject("IHistoricalTrainingRepository")
    private readonly repository: IHistoricalTrainingRepository
  ) {}

  async create(createHistoricalTrainingDto: CreateHistoricalTrainingDto) {
    return await this.repository.create(createHistoricalTrainingDto);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findById(id: string) {
    return await this.repository.findById(id);
  }

  async update(id: string, updateHistoricalTrainingDto: UpdateHistoricalTrainingDto) {
    return await this.repository.update(id, updateHistoricalTrainingDto);
  }

  async remove(id: string) {
    return await this.repository.remove(id);
  }
}
