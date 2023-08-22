import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateWorkoutsExerciseDto {
  @ApiProperty()
  @IsNotEmpty()
  trainingId: string;

  @ApiProperty()
  @IsNotEmpty()
  exercisesId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  series: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  repetitions: number;
}
