import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';

import { IPaymentsRepository } from '../../../domain/payments/repository/payments-abstract.repository';
import { Payment } from '../entities/payment.entity';
import { CreatePaymentDto } from '../../../domain/payments/dto/create-payment.dto';
import { UpdatePaymentDto } from '../../../domain/payments/dto/update-payment.dto';

@Injectable()
export class PaymentsRepository implements IPaymentsRepository{
  constructor(
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,
  ) {}

  async findAll() {
    return await this.paymentRepository.find();
  }

  async findById(id: string) {
    const payment = await this.paymentRepository.findOne({ where: { id } });

    if (!payment) return null;

    return payment;
  }

  async create(data: CreatePaymentDto) {
    const paymentNew = this.paymentRepository.create(data);

    await this.paymentRepository.save(paymentNew);
  }

  async update(id: string, data: UpdatePaymentDto) {
    const payment = await this.findById(id);

    const paymentUpdate = this.paymentRepository.merge(payment, data);

    await this.paymentRepository.save(paymentUpdate);
  }

  async remove(id: string) {
    await this.findById(id);
    await this.paymentRepository.softDelete(id);
  }
}
