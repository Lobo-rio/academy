import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { InternalServerErrorException } from '@nestjs/common/exceptions';
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
    try {
      return await this.workoutsexerciseRepository.find();
    } catch (error) {
      throw new InternalServerErrorException('Internal server error!', { description: error})
    }
  }

  async findById(id: string) {
    try { 
      const workoutsexercise = await this.workoutsexerciseRepository.findOne({ where: { id } });
      if (!workoutsexercise) return null;
      return workoutsexercise;
    } catch (error) {
      throw new InternalServerErrorException('Internal server error!', { description: error})
    }
  }

  async create(data: CreateWorkoutsExerciseDto) {
    try {
      const workoutsexerciseNew = this.workoutsexerciseRepository.create(data);
      await this.workoutsexerciseRepository.save(workoutsexerciseNew);
      return workoutsexerciseNew;
    } catch (error) {
      throw new InternalServerErrorException('Internal server error!', { description: error})
    }
  }

  async update(id: string, data: UpdateWorkoutsExerciseDto) {
    try { 
      const workoutsexercise = await this.findById(id);
      const workoutsexerciseUpdate = this.workoutsexerciseRepository.merge(workoutsexercise, data);
      await this.workoutsexerciseRepository.save(workoutsexerciseUpdate);
    } catch (error) {
      throw new InternalServerErrorException('Internal server error!', { description: error})
    }
  }

  async remove(id: string) {
    try {
      await this.findById(id);
      await this.workoutsexerciseRepository.softDelete(id);
    } catch (error) {
      throw new InternalServerErrorException('Internal server error!', { description: error})
    }
  }
}
