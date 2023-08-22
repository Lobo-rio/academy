import { NotFoundException } from '@nestjs/common';

import { WorkoutsExercise } from '../../../infra/database/entities/workouts-exercise.entity';
import { CreateWorkoutsExerciseDto } from '../dto/create-workouts-exercise.dto';
import { UpdateWorkoutsExerciseDto } from '../dto/update-workouts-exercise.dto';

export interface IWorkoutsExercisesRepository {
    findAll(): Promise<WorkoutsExercise[]>;
    findById(id: string): Promise<WorkoutsExercise | NotFoundException>;
    create(data: CreateWorkoutsExerciseDto): Promise<void | NotFoundException>;
    update(id: string, data: UpdateWorkoutsExerciseDto): Promise<void>;
    remove(id: string): Promise<void>;
}
