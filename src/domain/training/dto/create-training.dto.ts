import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
export class CreateTrainingDto {
  @ApiProperty()
  @IsNotEmpty()
  membersId: string;

  @ApiProperty()
  @IsNotEmpty()
  dateTraining: Date;
}
