import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID, Matches } from 'class-validator';
import { RegexHelpper } from '../../../helppers/regex';
export class CreatePaymentDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsUUID()
    memberId: string;

    @ApiProperty()
    @IsNotEmpty()
    value: number;

    @ApiProperty()
    @IsNotEmpty()
    @Matches(RegexHelpper.dateOff)
    payDay: Date;
}
