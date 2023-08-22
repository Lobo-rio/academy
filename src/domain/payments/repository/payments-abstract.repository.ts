import { NotFoundException } from '@nestjs/common';

import { Payment } from '../../../infra/database/entities/payment.entity';
import { CreatePaymentDto } from '../dto/create-payment.dto';
import { UpdatePaymentDto } from '../dto/update-payment.dto';

export interface IPaymentsRepository {
    findAll(): Promise<Payment[]>;
    findById(id: string): Promise<Payment | NotFoundException>;
    create(data: CreatePaymentDto): Promise<void | NotFoundException>;
    update(id: string, data: UpdatePaymentDto): Promise<void>;
    remove(id: string): Promise<void>;
}
