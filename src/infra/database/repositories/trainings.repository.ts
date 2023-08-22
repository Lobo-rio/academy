import { Injectable } from '@nestjs/common';
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
    return await this.trainingRepository.find();
  }

  async findById(id: string) {
    const training = await this.trainingRepository.findOne({ where: { id } });

    if (!training) return null;

    return training;
  }

  async create(data: CreateTrainingDto) {
    const trainingNew = this.trainingRepository.create(data);

    await this.trainingRepository.save(trainingNew);
  }

  async update(id: string, data: UpdateTrainingDto) {
    const training = await this.findById(id);

    const trainingUpdate = this.trainingRepository.merge(training, data);

    await this.trainingRepository.save(trainingUpdate);
  }

  async remove(id: string) {
    await this.findById(id);
    await this.trainingRepository.softDelete(id);
  }
}
