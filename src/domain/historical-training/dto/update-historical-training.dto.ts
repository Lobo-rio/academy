import { PartialType } from '@nestjs/mapped-types';
import { CreateHistoricalTrainingDto } from './create-historical-training.dto';

export class UpdateHistoricalTrainingDto extends PartialType(
  CreateHistoricalTrainingDto,
) {}
