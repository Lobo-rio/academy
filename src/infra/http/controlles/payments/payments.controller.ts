import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { CreatePaymentDto } from '../../../../domain/payments/dto/create-payment.dto';
import { UpdatePaymentDto } from '../../../../domain/payments/dto/update-payment.dto';
import { PaymentsService } from '../../../../domain/payments/service/payments.service';

import { BadRequestExceptionsSwagger } from '../../../../helppers/swagger/errors/bad-request-exception';
import { InternalServerErrorExceptionsSwagger } from '../../../../helppers/swagger/errors/internal-server-error-exception';

import { CreateTodoSwagger } from '../../../../helppers/swagger/response/payments/create-todo.swagger';
import { FindTodoSwagger } from '../../../../helppers/swagger/response/payments/find-todo.swagger';
import { NotFoundExceptionsSwagger } from '../../../../helppers/swagger/errors/not-found-exception';

@Controller('api/payments')
@ApiTags('Payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post()
  @ApiOperation({ summary: 'Create payment' })
  @ApiResponse({ 
    status:  201, 
    description: 'New payment successfully created',
    type: CreateTodoSwagger,
  })
  @ApiResponse({ 
      status:  400, 
      description: 'Invalid parameters',
      type: BadRequestExceptionsSwagger, 
  })
  @ApiResponse({ 
      status:  500, 
      description: 'Internal server errors',
      type: InternalServerErrorExceptionsSwagger, 
  })
  create(@Body() createPaymentDto: CreatePaymentDto) {
    return this.paymentsService.create(createPaymentDto);
  }

  @Get()
  @ApiOperation({ summary: 'List payments' })
  @ApiResponse({ 
      status:  200, 
      description: 'Returns a list of all registered payments',
      type: FindTodoSwagger,
  })
  @ApiResponse({ 
      status:  500, 
      description: 'Internal server errors',
      type: InternalServerErrorExceptionsSwagger, 
  })
  findAll() {
    return this.paymentsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Return payment' })
  @ApiResponse({ 
      status:  200, 
      description: 'Returns a registered payment, with the identifier that was informed',
      type: FindTodoSwagger,
  })
  @ApiResponse({ 
      status:  400, 
      description: 'Invalid parameters',
      type: NotFoundExceptionsSwagger, 
  })
  @ApiResponse({ 
      status:  500, 
      description: 'Internal server errors',
      type: InternalServerErrorExceptionsSwagger, 
  })
  findById(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.paymentsService.findById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update payment' })
  @ApiResponse({ 
      status:  200, 
      description: 'Update payment information',
  })
  @ApiResponse({ 
      status:  400, 
      description: 'Invalid parameters',
      type: NotFoundExceptionsSwagger, 
  })
  @ApiResponse({ 
      status:  500, 
      description: 'Internal server errors',
      type: InternalServerErrorExceptionsSwagger, 
  })
  update(@Param('id', new ParseUUIDPipe()) id: string, @Body() updatePaymentDto: UpdatePaymentDto) {
    return this.paymentsService.update(id, updatePaymentDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete payment' })
  @ApiResponse({ 
      status:  200, 
      description: 'Remove payment information',
  })
  @ApiResponse({ 
      status:  400, 
      description: 'Invalid parameters',
      type: NotFoundExceptionsSwagger, 
  })
  @ApiResponse({ 
      status:  500, 
      description: 'Internal server errors',
      type: InternalServerErrorExceptionsSwagger, 
  })
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.paymentsService.remove(id);
  }
}
