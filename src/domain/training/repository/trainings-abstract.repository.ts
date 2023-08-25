import { Training } from '../../../infra/database/entities/training.entity';
import { CreateTrainingDto } from '../dto/create-training.dto';
import { UpdateTrainingDto } from '../dto/update-training.dto';

export interface ITrainingsRepository {
    findAll(): Promise<Training[]>;
    findById(id: string): Promise<Training | null>;
    create(data: CreateTrainingDto): Promise<Training | null>;
    update(id: string, data: UpdateTrainingDto): Promise<void>;
    remove(id: string): Promise<void>;
}
