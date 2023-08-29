import { Inject, Injectable } from '@nestjs/common';
import { BadRequestException, NotFoundException } from '@nestjs/common/exceptions';

import { CreatePaymentDto } from '../dto/create-payment.dto';
import { UpdatePaymentDto } from '../dto/update-payment.dto';

import { IPaymentsRepository } from '../repository/payments-abstract.repository';
import { IMembersRepository } from '../../../domain/members/repository/members-abstract.repository';

import { Payment } from '../../../infra/database/entities/payment.entity';

@Injectable()
export class PaymentsService {
  constructor(
    @Inject("IPaymentsRepository")
    private readonly repository: IPaymentsRepository,
    @Inject("IMembersRepository")
    private readonly repositoryMembers: IMembersRepository,
  ) {}

  async create(createPaymentDto: CreatePaymentDto): Promise<Payment> {
    await this.findByMemder(createPaymentDto.memberId);
    const payment = await this.repository.create(createPaymentDto);
    return payment;
  }

  async findAll(): Promise<Payment[]> {
    return await this.repository.findAll();
  }

  async findById(id: string): Promise<Payment> {
    const payment = await this.repository.findById(id);
    if (!payment) throw new NotFoundException('Resource not found!!', { description: 'There is no registered payment with this identifier' });
    return payment;
  }

  async update(id: string, updatePaymentDto: UpdatePaymentDto): Promise<void> {
    await this.findById(id);
    if (updatePaymentDto.memberId) await this.findByMemder(updatePaymentDto.memberId);
    await this.repository.update(id, updatePaymentDto);
  }

  async remove(id: string): Promise<void> {
    await this.findById(id);
    await this.repository.remove(id);
  }

  private async findByMemder(memberId: string): Promise<void> {
    const member = await this.repositoryMembers.findById(memberId)
    if (!member) throw new NotFoundException('Resource not found!!', { description: 'There is no registered member with this identifier' });
  }
}
