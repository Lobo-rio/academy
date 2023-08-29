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
  @ApiProperty()
  password: string;

  @IsNotEmpty()
  @ApiProperty()
  isActive: boolean;

  @IsNotEmpty()
  @ApiProperty()
  isAdmin: boolean;
}
