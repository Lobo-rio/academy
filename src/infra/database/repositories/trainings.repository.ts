import { Injectable } from '@nestjs/common';
import { InternalServerErrorException } from '@nestjs/common/exceptions';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';

import { ITrainingsRepository } from '../../../domain/training/repository/trainings-abstract.repository';
import { Training } from '../entities/training.entity';
import { CreateTrainingDto } from '../../../domain/training/dto/create-training.dto';
import { UpdateTrainingDto } from '../../../domain/training/dto/update-training.dto';

@Injectable()
export class TrainingsRepository implements ITrainingsRepository{
  constructor(
    @InjectRepository(Training)
    private readonly trainingRepository: Repository<Training>,
  ) {}

  async findAll() {
    try {
      return await this.trainingRepository.find({
        relations: {
          members: true,
        },
      });
    } catch (error) {
      throw new InternalServerErrorException('Internal server error!', { description: error})
    }
  }

  async findById(id: string) {
    try {
      const training = await this.trainingRepository.findOne({ where: { id } });
      if (!training) return null;
      return training;
    } catch (error) {
      throw new InternalServerErrorException('Internal server error!', { description: error});
    }
  }

  async create(data: CreateTrainingDto) {
    try {
      const trainingNew = this.trainingRepository.create(data);
      const training = await this.trainingRepository.save(trainingNew);
      return training;
    } catch (error) {
      throw new InternalServerErrorException('Internal server error!', { description: error});
    }
  }

  async update(id: string, data: UpdateTrainingDto) {
    try {
      const training = await this.findById(id);
      const trainingUpdate = this.trainingRepository.merge(training, data);
      await this.trainingRepository.save(trainingUpdate);
    } catch (error) {
      throw new InternalServerErrorException('Internal server error!', { description: error});
    }
  }

  async remove(id: string) {
    try {
      await this.trainingRepository.softDelete(id);
    } catch (error) {
      throw new InternalServerErrorException('Internal server error!', { description: error});
    }
  }
}
