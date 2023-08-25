import { Inject, Injectable } from '@nestjs/common';

import { CreateTrainingDto } from '../dto/create-training.dto';
import { UpdateTrainingDto } from '../dto/update-training.dto';
import { ITrainingsRepository } from '../repository/trainings-abstract.repository';
import { Training } from 'src/infra/database/entities/training.entity';

@Injectable()
export class TrainingService {
  constructor(
    @Inject("ITrainingsRepository")
    private readonly repository: ITrainingsRepository
  ) {}

  async create(createTrainingDto: CreateTrainingDto): Promise<Training> {
    const training = await this.repository.create(createTrainingDto);
    return training;
  }

  async findAll(): Promise<Training[]> {
    return await this.repository.findAll();
  }

  async findById(id: string): Promise<Training> {
    const training = await this.repository.findById(id);
    return training;
  }

  async update(id: string, updateTrainingDto: UpdateTrainingDto): Promise<void> {
    await this.findById(id);
    await this.repository.update(id, updateTrainingDto);
  }

  async remove(id: string): Promise<void> {
    await this.findById(id);
    await this.repository.remove(id);
  }
}
