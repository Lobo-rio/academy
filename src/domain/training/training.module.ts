import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TrainingService } from './service/training.service';
import { TrainingController } from '../../infra/http/controlles/training/training.controller';

import { Training } from '../../infra/database/entities/training.entity';
import { Member } from '../../infra/database/entities/member.entity';

import { TrainingsRepository } from '../../infra/database/repositories/trainings.repository';
import { MembersRepository } from '../../infra/database/repositories/members.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Training,
      Member,
    ]),
  ],
  controllers: [TrainingController],
  providers: [
    TrainingService,
    {
      provide: "ITrainingsRepository",
      useClass: TrainingsRepository,
    },
    {
      provide: "IMembersRepository",
      useClass: MembersRepository,
    },
  ],
  exports: [TrainingService],
})
export class TrainingModule {}
