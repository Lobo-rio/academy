import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Matches } from 'class-validator';
import { RegexHelpper } from '../../../helppers/regex';
export class CreateMemberDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @Matches(RegexHelpper.dateOff)
  dateOfBirth: Date;

  @ApiProperty()
  @IsNotEmpty()
  @Matches(RegexHelpper.phone)
  phone: string;

  @ApiProperty()
  @IsNotEmpty()
  isActive: boolean;
}
