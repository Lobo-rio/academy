import { Injectable } from '@nestjs/common';
import { InternalServerErrorException } from '@nestjs/common/exceptions';
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
    try {
      return await this.paymentRepository.find({
        relations: {
          member: true,
        },
      });
    } catch (error) {
      throw new InternalServerErrorException('Internal server error!', { description: error})
    }
  }

  async findById(id: string) {
    try {
      const payment = await this.paymentRepository.findOne({ 
        where: { id },
        relations: {
          member: true,
        },
      });
      if (!payment) return null;
      return payment;
    } catch (error) {
      throw new InternalServerErrorException('Internal server error!', { description: error})
    }
  }

  async create(data: CreatePaymentDto) {
    try {
      const paymentNew = this.paymentRepository.create(data);
      await this.paymentRepository.save(paymentNew);
      return paymentNew;
    } catch (error) {
      throw new InternalServerErrorException('Internal server error!', { description: error})
    }
  }

  async update(id: string, data: UpdatePaymentDto) {
    try {
      const payment = await this.findById(id);
      const paymentUpdate = this.paymentRepository.merge(payment, data);
      await this.paymentRepository.save(paymentUpdate);
    } catch (error) {
      throw new InternalServerErrorException('Internal server error!', { description: error})
    }
  }

  async remove(id: string) {
    try {
      await this.findById(id);
      await this.paymentRepository.softDelete(id);
    } catch (error) {
      throw new InternalServerErrorException('Internal server error!', { description: error})
    }
  }
}
