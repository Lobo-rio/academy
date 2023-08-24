import { ApiProperty } from '@nestjs/swagger';

export class InternalServerErrorExceptionsSwagger {
    @ApiProperty()
    statusCode: number;
  
    @ApiProperty()
    message: string;
  
    @ApiProperty()
    error: string;
}