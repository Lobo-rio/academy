import { Module } from '@nestjs/common';

import { PaymentsController } from 'src/infra/http/controlles/payments/payments.controller';
import { PaymentsService } from './service/payments.service';

@Module({
  controllers: [PaymentsController],
  providers: [PaymentsService],
})
export class PaymentsModule {}
