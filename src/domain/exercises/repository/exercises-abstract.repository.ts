import { NotFoundException } from '@nestjs/common';

import { Exercise } from '../../../infra/database/entities/exercise.entity';
import { CreateExerciseDto } from '../dto/create-exercise.dto';
import { UpdateExerciseDto } from '../dto/update-exercise.dto';

export interface IExercisesRepository {
    findAll(): Promise<Exercise[]>;
    findById(id: string): Promise<Exercise | NotFoundException>;
    create(data: CreateExerciseDto): Promise<void | NotFoundException>;
    update(id: string, data: UpdateExerciseDto): Promise<void>;
    remove(id: string): Promise<void>;
}
