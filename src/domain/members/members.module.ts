import { Module } from '@nestjs/common';

import { MembersController } from 'src/infra/http/controlles/members/members.controller';
import { MembersService } from './service/members.service';

@Module({
  controllers: [MembersController],
  providers: [MembersService],
})
export class MembersModule {}
