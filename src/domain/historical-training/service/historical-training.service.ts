import { Inject, Injectable } from '@nestjs/common';
import { BadRequestException, NotFoundException } from '@nestjs/common/exceptions';

import { CreateHistoricalTrainingDto } from '../dto/create-historical-training.dto';
import { UpdateHistoricalTrainingDto } from '../dto/update-historical-training.dto';
import { IHistoricalTrainingRepository } from '../repository/historical-training-abstract.repository';
import { IMembersRepository } from '../../../domain/members/repository/members-abstract.repository';
import { ITrainingsRepository } from '../../../domain/training/repository/trainings-abstract.repository';
import { HistoricalTraining } from 'src/infra/database/entities/historical-training.entity';

@Injectable()
export class HistoricalTrainingService {
  constructor(
    @Inject("IHistoricalTrainingRepository")
    private readonly repository: IHistoricalTrainingRepository,
    @Inject("IMembersRepository")
    private readonly repositoryMember: IMembersRepository,
    @Inject("ITrainingsRepository")
    private readonly repositoryTraining: ITrainingsRepository,
  ) {}

  async create(createHistoricalTrainingDto: CreateHistoricalTrainingDto): Promise<HistoricalTraining> {
    await this.findByMemder(createHistoricalTrainingDto.memberId);
    await this.findByTraining(createHistoricalTrainingDto.trainingId);
    const historicalTraining = await this.repository.create(createHistoricalTrainingDto);
    return historicalTraining;
  }

  async findAll(): Promise<HistoricalTraining[]> {
    return await this.repository.findAll();
  }

  async findById(id: string): Promise<HistoricalTraining> {
    const historicalTraining = await this.repository.findById(id);
    if (!historicalTraining) throw new NotFoundException('Resource not found!!', { description: 'There is no registered historical training with this identifier' });
    return historicalTraining;
  }

  async update(id: string, updateHistoricalTrainingDto: UpdateHistoricalTrainingDto): Promise<void> {
    await this.findById(id);
    if (updateHistoricalTrainingDto.memberId) await this.findByMemder(updateHistoricalTrainingDto.memberId);
    if (updateHistoricalTrainingDto.trainingId) await this.findByMemder(updateHistoricalTrainingDto.trainingId);
    await this.repository.update(id, updateHistoricalTrainingDto);
  }

  async remove(id: string) {
    await this.findById(id);
    await this.repository.remove(id);
  }

  private async findByMemder(memberId: string): Promise<void> {
    const member = await this.repositoryMember.findById(memberId)
    if (!member) throw new NotFoundException('Resource not found!!', { description: 'There is no registered member with this identifier' });
  }

  private async findByTraining(trainingId: string): Promise<void> {
    const training = await this.repositoryTraining.findById(trainingId)
    if (!training) throw new NotFoundException('Resource not found!!', { description: 'There is no registered training with this identifier' });
  }
}
