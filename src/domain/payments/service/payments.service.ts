import { Inject, Injectable } from '@nestjs/common';

import { CreatePaymentDto } from '../dto/create-payment.dto';
import { UpdatePaymentDto } from '../dto/update-payment.dto';
import { IPaymentsRepository } from '../repository/payments-abstract.repository';

@Injectable()
export class PaymentsService {
  constructor(
    @Inject("IPaymentsRepository")
    private readonly repository: IPaymentsRepository
  ) {}

  async create(createPaymentDto: CreatePaymentDto) {
    return await this.repository.create(createPaymentDto);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findById(id: string) {
    return await this.repository.findById(id);
  }

  async update(id: string, updatePaymentDto: UpdatePaymentDto) {
    return await this.repository.update(id, updatePaymentDto);
  }

  async remove(id: string) {
    return await this.repository.remove(id);
  }
}
