import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MembersController } from '../../infra/http/controlles/members/members.controller';
import { MembersService } from './service/members.service';
import { Member } from '../../infra/database/entities/member.entity';
import { MembersRepository } from '../../infra/database/repositories/members.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Member]),
  ],
  controllers: [MembersController],
  providers: [
    MembersService,
    {
      provide: "IMembersRepository",
      useClass: MembersRepository,
    },
  ],
  exports: [MembersService],
})
export class MembersModule {}
