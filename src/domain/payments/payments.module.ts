import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PaymentsController } from '../../infra/http/controlles/payments/payments.controller';
import { PaymentsService } from './service/payments.service';
import { Payment } from '../../infra/database/entities/payment.entity';
import { Member } from '../../infra/database/entities/member.entity';
import { PaymentsRepository } from '../../infra/database/repositories/payments.repository';
import { MembersRepository } from '../../infra/database/repositories/members.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Payment,
      Member,
    ]),
  ],
  controllers: [PaymentsController],
  providers: [
    PaymentsService,
    {
      provide: "IPaymentsRepository",
      useClass: PaymentsRepository,
    },
    {
      provide: "IMembersRepository",
      useClass: MembersRepository,
    },
  ],
  exports: [PaymentsService],
})
export class PaymentsModule {}
