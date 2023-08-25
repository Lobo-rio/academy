import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsISO8601, IsNotEmpty, IsUUID } from 'class-validator';
import { Type } from 'class-transformer';
export class CreateTrainingDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  memberId: string;

  @ApiProperty()
  @IsNotEmpty()
  realizationDate: Date;
}
