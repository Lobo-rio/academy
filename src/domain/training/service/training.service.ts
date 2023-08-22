import { Inject, Injectable } from '@nestjs/common';

import { CreateTrainingDto } from '../dto/create-training.dto';
import { UpdateTrainingDto } from '../dto/update-training.dto';
import { ITrainingsRepository } from '../repository/trainings-abstract.repository';

@Injectable()
export class TrainingService {
  constructor(
    @Inject("ITrainingsRepository")
    private readonly repository: ITrainingsRepository
  ) {}

  async create(createTrainingDto: CreateTrainingDto) {
    return await this.repository.create(createTrainingDto);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findById(id: string) {
    return await this.repository.findById(id);
  }

  async update(id: string, updateTrainingDto: UpdateTrainingDto) {
    return await this.repository.update(id, updateTrainingDto);
  }

  async remove(id: string) {
    return await this.repository.remove(id);
  }
}
