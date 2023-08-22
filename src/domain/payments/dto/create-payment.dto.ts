import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty } from 'class-validator';
export class CreatePaymentDto {
    @ApiProperty()
    @IsNotEmpty()
    membro_id: string;

    @ApiProperty()
    @IsNotEmpty()
    valor: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsDate()
    data_pagamento: Date;
}
