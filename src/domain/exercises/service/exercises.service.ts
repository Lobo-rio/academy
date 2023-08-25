import { Inject, Injectable } from '@nestjs/common';
import { BadRequestException, NotFoundException } from '@nestjs/common/exceptions';

import { CreateExerciseDto } from '../dto/create-exercise.dto';
import { UpdateExerciseDto } from '../dto/update-exercise.dto';
import { IExercisesRepository } from '../repository/exercises-abstract.repository';
import { Exercise } from '../../../infra/database/entities/exercise.entity';

@Injectable()
export class ExercisesService {
  constructor(
    @Inject("IExercisesRepository")
    private readonly repository: IExercisesRepository
  ) {}

  async create(createExerciseDto: CreateExerciseDto): Promise<Exercise> {
    const exerciseExisted = await this.repository.findByTitle(createExerciseDto.title);
    if (exerciseExisted) throw new BadRequestException('Resource existed!', { description: 'There is a registered exercise with this title' });

    const exercise = await this.repository.create(createExerciseDto);
    return exercise;
  }

  async findAll(): Promise<Exercise[]> {
    return await this.repository.findAll();
  }

  async findById(id: string): Promise<Exercise> {
    const exerciseExisted = await this.repository.findById(id);
    if (!exerciseExisted) throw new NotFoundException('Resource not found!!', { description: 'There is no registered exercise with this identifier' });
    return exerciseExisted;
  }

  async update(id: string, updateExerciseDto: UpdateExerciseDto): Promise<void> {
    await this.findById(id);
    await this.repository.update(id, updateExerciseDto);
  }

  async remove(id: string): Promise<void> {
    await this.findById(id);
    await this.repository.remove(id);
  }
}
