import { Inject, Injectable } from '@nestjs/common';

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
    return await this.repository.create(createExerciseDto);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findById(id: string) {
    return await this.repository.findById(id);
  }

  async update(id: string, updateExerciseDto: UpdateExerciseDto) {
    return await this.repository.update(id, updateExerciseDto);
  }

  async remove(id: string) {
    return await this.repository.remove(id);
  }
}
