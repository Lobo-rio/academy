import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { LocalStrategy } from './strategies/local-strategy';
import { JwtStrategy } from './strategies/jwt-strategy';

import { User } from '../../infra/database/entities/user.entity';
import { UsersRepository } from '../../infra/database/repositories/users.repository';

import { AuthController } from '../../infra/http/controlles/authenticate/auth.controller';
import { AuthService } from './service/auth.service';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature([User]),
    UsersModule,
    PassportModule,
    JwtModule.register({
      privateKey: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    LocalStrategy, 
    JwtStrategy,
    {
      provide: "IUsersRepository",
      useClass: UsersRepository,
    },
  ],
  exports: [AuthService],
})
export class AuthModule {}