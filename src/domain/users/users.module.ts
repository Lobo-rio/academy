import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersController } from '../../infra/http/controlles/users/users.controller';
import { UsersService } from './service/users.service';
import { User } from '../../infra/database/entities/user.entity';
import { UsersRepository } from '../../infra/database/repositories/users.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: "IUsersRepository",
      useClass: UsersRepository,
    },
  ],
  exports: [UsersService],
})
export class UsersModule {}
