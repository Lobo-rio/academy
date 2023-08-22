import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';

import { HistoricalTraining } from '../entities/historical-training.entity';
import { IHistoricalTrainingRepository } from '../../../domain/historical-training/repository/historical-training-abstract.repository';
import { CreateHistoricalTrainingDto } from '../../../domain/historical-training/dto/create-historical-training.dto';
import { UpdateHistoricalTrainingDto } from '../../../domain/historical-training/dto/update-historical-training.dto';

@Injectable()
export class HistoricalTrainingRepository implements IHistoricalTrainingRepository{
  constructor(
    @InjectRepository(HistoricalTraining)
    private readonly historicaltrainingRepository: Repository<HistoricalTraining>,
  ) {}

  async findAll() {
    return await this.historicaltrainingRepository.find();
  }

  async findById(id: string) {
    const historicaltraining = await this.historicaltrainingRepository.findOne({ where: { id } });

    if (!historicaltraining) return null;

    return historicaltraining;
  }

  async create(data: CreateHistoricalTrainingDto) {
    const historicaltrainingNew = this.historicaltrainingRepository.create(data);

    await this.historicaltrainingRepository.save(historicaltrainingNew);
  }

  async update(id: string, data: UpdateHistoricalTrainingDto) {
    const historicaltraining = await this.findById(id);

    const historicaltrainingUpdate = this.historicaltrainingRepository.merge(historicaltraining, data);

    await this.historicaltrainingRepository.save(historicaltrainingUpdate);
  }

  async remove(id: string) {
    await this.findById(id);
    await this.historicaltrainingRepository.softDelete(id);
  }
}
