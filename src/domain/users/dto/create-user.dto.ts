import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Matches } from 'class-validator';

import { RegexHelpper } from '../../../helppers/regex';
import { MessageErrorHelpper } from '../../../helppers/errors';

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
  @Matches(
    RegexHelpper.password,
    { message: MessageErrorHelpper.PASSWORD_VALID }
  )
  password: string;

  @IsNotEmpty()
  @ApiProperty()
  isActive: boolean;

  @IsNotEmpty()
  @ApiProperty()
  isAdmin: boolean;
}
