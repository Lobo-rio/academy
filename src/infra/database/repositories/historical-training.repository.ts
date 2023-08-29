import { Injectable } from '@nestjs/common';
import { InternalServerErrorException } from '@nestjs/common/exceptions';
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
    try {
      return await this.historicaltrainingRepository.find({
        relations: {
          member: true,
          training: true,
        },
      });
    } catch (error) {
      throw new InternalServerErrorException('Internal server error!', { description: error})
    }
  }
  async findById(id: string) {
    try {
      const historicaltraining = await this.historicaltrainingRepository.findOne({ 
        where: { id },
        relations: {
          member: true,
          training: true,
        },
      });
      if (!historicaltraining) return null;
      return historicaltraining;
    } catch (error) {
      throw new InternalServerErrorException('Internal server error!', { description: error})
    }
  }

  async create(data: CreateHistoricalTrainingDto) {
    try {
      const historicaltrainingNew = this.historicaltrainingRepository.create(data);
      await this.historicaltrainingRepository.save(historicaltrainingNew);
      return historicaltrainingNew;
    } catch (error) {
      throw new InternalServerErrorException('Internal server error!', { description: error})
    }
  }

  async update(id: string, data: UpdateHistoricalTrainingDto) {
    try {
      const historicaltraining = await this.findById(id);
      const historicaltrainingUpdate = this.historicaltrainingRepository.merge(historicaltraining, data);
      await this.historicaltrainingRepository.save(historicaltrainingUpdate);
    } catch (error) {
      throw new InternalServerErrorException('Internal server error!', { description: error})
    }
  }

  async remove(id: string) {
    try {
      await this.findById(id);
      await this.historicaltrainingRepository.softDelete(id);
    } catch (error) {
      throw new InternalServerErrorException('Internal server error!', { description: error})
    }
  }
}
