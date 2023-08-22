import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';

import { Exercise } from '../entities/exercise.entity';
import { IExercisesRepository } from '../../../domain/exercises/repository/exercises-abstract.repository';
import { CreateExerciseDto } from '../../../domain/exercises/dto/create-exercise.dto';
import { UpdateExerciseDto } from '../../../domain/exercises/dto/update-exercise.dto';

@Injectable()
export class ExercisesRepository implements IExercisesRepository{
  constructor(
    @InjectRepository(Exercise)
    private readonly exerciseRepository: Repository<Exercise>,
  ) {}

  async findAll() {
    return await this.exerciseRepository.find();
  }

  async findById(id: string) {
    const exercise = await this.exerciseRepository.findOne({ where: { id } });

    if (!exercise) return null;

    return exercise;
  }

  async create(data: CreateExerciseDto) {
    const exerciseNew = this.exerciseRepository.create(data);

    await this.exerciseRepository.save(exerciseNew);
  }

  async update(id: string, data: UpdateExerciseDto) {
    const exercise = await this.findById(id);

    const exerciseUpdate = this.exerciseRepository.merge(exercise, data);

    await this.exerciseRepository.save(exerciseUpdate);
  }

  async remove(id: string) {
    await this.findById(id);
    await this.exerciseRepository.softDelete(id);
  }
}
