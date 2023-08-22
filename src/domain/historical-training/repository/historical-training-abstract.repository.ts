import { NotFoundException } from '@nestjs/common';

import { HistoricalTraining } from '../../../infra/database/entities/historical-training.entity';
import { CreateHistoricalTrainingDto } from '../dto/create-historical-training.dto';
import { UpdateHistoricalTrainingDto } from '../dto/update-historical-training.dto';

export interface IHistoricalTrainingRepository {
    findAll(): Promise<HistoricalTraining[]>;
    findById(id: string): Promise<HistoricalTraining | NotFoundException>;
    create(data: CreateHistoricalTrainingDto): Promise<void | NotFoundException>;
    update(id: string, data: UpdateHistoricalTrainingDto): Promise<void>;
    remove(id: string): Promise<void>;
}
