import { Injectable } from '@nestjs/common';
import { InternalServerErrorException } from '@nestjs/common/exceptions';
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
    try {
      return await this.exerciseRepository.find();
    } catch (error) {
      throw new InternalServerErrorException('Internal server error!', { description: error})
    }
  }

  async findById(id: string) {
    try {
      const exercise = await this.exerciseRepository.findOne({ where: { id } });
      if (!exercise) return null;
      return exercise;
    } catch (error) {
      throw new InternalServerErrorException('Internal server error!', { description: error})
    }
  }

  async findByTitle(title: string) {
    try {
      const exercise = await this.exerciseRepository.findOne({ where: { title } });
      if (!exercise) return null;
      return exercise;
    } catch (error) {
      throw new InternalServerErrorException('Internal server error!', { description: error})
    }
  }

  async create(data: CreateExerciseDto) {
    try {
      const exerciseNew = this.exerciseRepository.create(data);
      await this.exerciseRepository.save(exerciseNew);
      return exerciseNew;
    } catch (error) {
      throw new InternalServerErrorException('Internal server error!', { description: error})
    }
  }

  async update(id: string, data: UpdateExerciseDto) {
    try {
      const exercise = await this.findById(id);
      const exerciseUpdate = this.exerciseRepository.merge(exercise, data);
      await this.exerciseRepository.save(exerciseUpdate);
    } catch (error) {
      throw new InternalServerErrorException('Internal server error!', { description: error})
    }
  }

  async remove(id: string) {
    try {
      await this.findById(id);
      await this.exerciseRepository.softDelete(id);
    } catch (error) {
      throw new InternalServerErrorException('Internal server error!', { description: error})
    }
  }
}
