import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Min, Max } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsNotEmpty()
  @Min(5)
  @Max(15)
  @ApiProperty()
  password: string;

  @IsNotEmpty()
  @ApiProperty()
  active: boolean;

  @IsNotEmpty()
  @ApiProperty()
  admin: boolean;
}
