import { Inject, Injectable } from '@nestjs/common';
import { BadRequestException, NotFoundException } from '@nestjs/common/exceptions';

import { CreateWorkoutsExerciseDto } from '../dto/create-workouts-exercise.dto';
import { UpdateWorkoutsExerciseDto } from '../dto/update-workouts-exercise.dto';

import { IWorkoutsExercisesRepository } from '../repository/workouts-exercises-abstract.repository';
import { ITrainingsRepository } from '../../../domain/training/repository/trainings-abstract.repository';
import { IExercisesRepository } from '../../../domain/exercises/repository/exercises-abstract.repository';

import { WorkoutsExercise } from '../../../infra/database/entities/workouts-exercise.entity';
 
@Injectable()
export class WorkoutsExercisesService {
  constructor(
    @Inject("IWorkoutsExercisesRepository")
    private readonly repository: IWorkoutsExercisesRepository,
    @Inject("ITrainingsRepository")
    private readonly repositoryTraining: ITrainingsRepository,
    @Inject("IExercisesRepository")
    private readonly repositoryExercise: IExercisesRepository,
  ) {}

  async create(createWorkoutsExerciseDto: CreateWorkoutsExerciseDto): Promise<WorkoutsExercise> {
    await this.findByTraining(createWorkoutsExerciseDto.trainingId)
    await this.findByExercise(createWorkoutsExerciseDto.exerciseId)

    const workoutsExercise = await this.repository.create(createWorkoutsExerciseDto);
    return workoutsExercise;
  }

  async findAll(): Promise<WorkoutsExercise[]> {
    return await this.repository.findAll();
  }

  async findById(id: string): Promise<WorkoutsExercise> {
    const workoutsExercise = await this.repository.findById(id);
    if (!workoutsExercise) throw new NotFoundException('Resource not found!!', { description: 'There is no registered workout exercise with this identifier' });
    return workoutsExercise;
  }

  async update(id: string, updateWorkoutsExerciseDto: UpdateWorkoutsExerciseDto): Promise<void> {
    await this.findById(id);

    if (updateWorkoutsExerciseDto.trainingId) await this.findByTraining(updateWorkoutsExerciseDto.trainingId)
    if (updateWorkoutsExerciseDto.exerciseId) await this.findByExercise(updateWorkoutsExerciseDto.exerciseId)

    await this.repository.update(id, updateWorkoutsExerciseDto);
  }

  async remove(id: string): Promise<void> {
    await this.findById(id);
    await this.repository.remove(id);
  }

  private async findByTraining(trainingId: string): Promise<void> {
    const training = await this.repositoryTraining.findById(trainingId)
    if (!training) throw new NotFoundException('Resource not found!!', { description: 'There is no registered training with this identifier' });
  }

  private async findByExercise(exerciseId: string): Promise<void> {
    const exercise = await this.repositoryExercise.findById(exerciseId)
    if (!exercise) throw new NotFoundException('Resource not found!!', { description: 'There is no registered exercise with this identifier' });
  }
}
