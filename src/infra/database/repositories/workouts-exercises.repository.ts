import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';

import { IWorkoutsExercisesRepository } from '../../../domain/workouts-exercises/repository/workouts-exercises-abstract.repository';
import { WorkoutsExercise } from '../entities/workouts-exercise.entity';
import { CreateWorkoutsExerciseDto } from '../../../domain/workouts-exercises/dto/create-workouts-exercise.dto';
import { UpdateWorkoutsExerciseDto } from '../../../domain/workouts-exercises/dto/update-workouts-exercise.dto';


@Injectable()
export class WorkoutsExercisesRepository implements IWorkoutsExercisesRepository{
  constructor(
    @InjectRepository(WorkoutsExercise)
    private readonly workoutsexerciseRepository: Repository<WorkoutsExercise>,
  ) {}

  async findAll() {
    return await this.workoutsexerciseRepository.find();
  }

  async findById(id: string) {
    const workoutsexercise = await this.workoutsexerciseRepository.findOne({ where: { id } });

    if (!workoutsexercise) return null;

    return workoutsexercise;
  }

  async create(data: CreateWorkoutsExerciseDto) {
    const workoutsexerciseNew = this.workoutsexerciseRepository.create(data);

    await this.workoutsexerciseRepository.save(workoutsexerciseNew);
  }

  async update(id: string, data: UpdateWorkoutsExerciseDto) {
    const workoutsexercise = await this.findById(id);

    const workoutsexerciseUpdate = this.workoutsexerciseRepository.merge(workoutsexercise, data);

    await this.workoutsexerciseRepository.save(workoutsexerciseUpdate);
  }

  async remove(id: string) {
    await this.findById(id);
    await this.workoutsexerciseRepository.softDelete(id);
  }
}
