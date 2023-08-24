import { ApiProperty } from '@nestjs/swagger';

export class BadRequestExceptionsSwagger {
    @ApiProperty()
    statusCode: number;
  
    @ApiProperty()
    message: string;
  
    @ApiProperty()
    error: string;
}