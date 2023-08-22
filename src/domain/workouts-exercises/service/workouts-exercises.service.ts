import { Inject, Injectable } from '@nestjs/common';

import { CreateWorkoutsExerciseDto } from '../dto/create-workouts-exercise.dto';
import { UpdateWorkoutsExerciseDto } from '../dto/update-workouts-exercise.dto';
import { IWorkoutsExercisesRepository } from '../repository/workouts-exercises-abstract.repository';

@Injectable()
export class WorkoutsExercisesService {
  constructor(
    @Inject("IWorkoutsExercisesRepository")
    private readonly repository: IWorkoutsExercisesRepository
  ) {}

  async create(createWorkoutsExerciseDto: CreateWorkoutsExerciseDto) {
    return await this.repository.create(createWorkoutsExerciseDto);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findById(id: string) {
    return await this.repository.findById(id);
  }

  async update(id: string, updateWorkoutsExerciseDto: UpdateWorkoutsExerciseDto) {
    return await this.repository.update(id, updateWorkoutsExerciseDto);
  }

  async remove(id: string) {
    return await this.repository.remove(id);
  }
}
