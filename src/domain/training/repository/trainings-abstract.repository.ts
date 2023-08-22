import { NotFoundException } from '@nestjs/common';

import { Training } from '../../../infra/database/entities/training.entity';
import { CreateTrainingDto } from '../dto/create-training.dto';
import { UpdateTrainingDto } from '../dto/update-training.dto';

export interface ITrainingsRepository {
    findAll(): Promise<Training[]>;
    findById(id: string): Promise<Training | NotFoundException>;
    create(data: CreateTrainingDto): Promise<void | NotFoundException>;
    update(id: string, data: UpdateTrainingDto): Promise<void>;
    remove(id: string): Promise<void>;
}
