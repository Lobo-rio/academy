import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';
export class CreateTrainingDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  memberId: string;

  @ApiProperty()
  @IsNotEmpty()
  realizationDate: Date;
}
