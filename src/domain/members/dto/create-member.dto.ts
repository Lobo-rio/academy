import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsEmail, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

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
  @IsDate()
  @Type(() => Date)
  dateOfBirth: Date;

  @ApiProperty()
  @IsNotEmpty()
  phone: string;

  @ApiProperty()
  @IsNotEmpty()
  isActive: boolean;
}
