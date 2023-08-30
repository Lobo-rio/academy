import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateWorkoutsExerciseDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  trainingId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  exerciseId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  series: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  repetitions: number;
}
