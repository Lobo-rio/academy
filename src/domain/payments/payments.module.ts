import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PaymentsController } from '../../infra/http/controlles/payments/payments.controller';
import { PaymentsService } from './service/payments.service';
import { Payment } from '../../infra/database/entities/payment.entity';
import { PaymentsRepository } from '../../infra/database/repositories/payments.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Payment]),
  ],
  controllers: [PaymentsController],
  providers: [
    PaymentsService,
    {
      provide: "IPaymentsRepository",
      useClass: PaymentsRepository,
    },
  ],
  exports: [PaymentsService],
})
export class PaymentsModule {}
