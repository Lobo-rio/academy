import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty } from 'class-validator';
export class CreateHistoricalTrainingDto {
  @ApiProperty()
  @IsNotEmpty()
  membersId: string;

  @ApiProperty()
  @IsNotEmpty()
  trainingId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  realizationDate: Date;
}
