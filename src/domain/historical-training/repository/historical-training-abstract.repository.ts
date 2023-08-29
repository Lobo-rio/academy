import { NotFoundException } from '@nestjs/common';

import { HistoricalTraining } from '../../../infra/database/entities/historical-training.entity';
import { CreateHistoricalTrainingDto } from '../dto/create-historical-training.dto';
import { UpdateHistoricalTrainingDto } from '../dto/update-historical-training.dto';

export interface IHistoricalTrainingRepository {
    findAll(): Promise<HistoricalTraining[]>;
    findById(id: string): Promise<HistoricalTraining | null>;
    create(data: CreateHistoricalTrainingDto): Promise<HistoricalTraining | null>;
    update(id: string, data: UpdateHistoricalTrainingDto): Promise<void>;
    remove(id: string): Promise<void>;
}
