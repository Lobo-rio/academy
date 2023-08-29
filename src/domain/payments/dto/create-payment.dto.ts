import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';
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
    payDay: Date;
}
