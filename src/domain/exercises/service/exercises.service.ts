import { Inject, Injectable } from '@nestjs/common';
import { BadRequestException, NotFoundException } from '@nestjs/common/exceptions';

import { CreateExerciseDto } from '../dto/create-exercise.dto';
import { UpdateExerciseDto } from '../dto/update-exercise.dto';
import { IExercisesRepository } from '../repository/exercises-abstract.repository';

@Injectable()
export class ExercisesService {
  constructor(
    @Inject("IExercisesRepository")
    private readonly repository: IExercisesRepository
  ) {}

  async create(createExerciseDto: CreateExerciseDto) {
    const exerciseExisted = await this.repository.findByTitle(createExerciseDto.title);
    if (exerciseExisted) throw new BadRequestException('Resource existed!', { description: 'There is a registered exercise with this title' });

    const exercise = await this.repository.create(createExerciseDto);
    return exercise;
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findById(id: string) {
    const exerciseExisted = await this.repository.findById(id);
    if (!exerciseExisted) throw new NotFoundException('Resource not found!!', { description: 'There is no registered exercise with this identifier' });
    return exerciseExisted;
  }

  async update(id: string, updateExerciseDto: UpdateExerciseDto) {
    await this.findById(id);
    await this.repository.update(id, updateExerciseDto);
  }

  async remove(id: string) {
    await this.findById(id);
    await this.repository.remove(id);
  }
}
