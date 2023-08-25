import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsUUID } from 'class-validator';
export class CreateTrainingDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  membersId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  dateTraining: Date;
}
