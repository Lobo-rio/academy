import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsUUID } from 'class-validator';
export class CreateHistoricalTrainingDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  memberId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  trainingId: string;

  @ApiProperty()
  @IsNotEmpty()
  realizationDate: Date;
}
