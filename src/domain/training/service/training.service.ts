import { Inject, Injectable } from '@nestjs/common';
import { BadRequestException, NotFoundException } from '@nestjs/common/exceptions';

import { CreateTrainingDto } from '../dto/create-training.dto';
import { UpdateTrainingDto } from '../dto/update-training.dto';

import { ITrainingsRepository } from '../repository/trainings-abstract.repository';
import { IMembersRepository } from '../../../domain/members/repository/members-abstract.repository';

import { Training } from '../../../infra/database/entities/training.entity';

@Injectable()
export class TrainingService {
  constructor(
    @Inject("ITrainingsRepository")
    private readonly repository: ITrainingsRepository,
    @Inject("IMembersRepository")
    private readonly repositoryMembers: IMembersRepository,
  ) {}

  async create(createTrainingDto: CreateTrainingDto): Promise<Training> {
    await this.findByMemder(createTrainingDto.memberId);
    const training = await this.repository.create(createTrainingDto);
    return training;
  }

  async findAll(): Promise<Training[]> {
    return await this.repository.findAll();
  }

  async findById(id: string): Promise<Training> {
    const training = await this.repository.findById(id);
    if (!training) throw new NotFoundException('Resource not found!!', { description: 'There is no registered training with this identifier' });
    return training;
  }

  async update(id: string, updateTrainingDto: UpdateTrainingDto): Promise<void> {
    await this.findById(id);
    if (updateTrainingDto.memberId) await this.findByMemder(updateTrainingDto.memberId);
    await this.repository.update(id, updateTrainingDto);
  }

  async remove(id: string): Promise<void> {
    await this.findById(id);
    await this.repository.remove(id);
  }

  private async findByMemder(memberId: string): Promise<void> {
    const member = await this.repositoryMembers.findById(memberId)
    if (!member) throw new NotFoundException('Resource not found!!', { description: 'There is no registered member with this identifier' });
  }
}
