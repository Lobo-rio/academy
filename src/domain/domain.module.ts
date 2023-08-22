import { Module } from '@nestjs/common';
import { MembersModule } from './members/members.module';
import { ExercisesModule } from './exercises/exercises.module';
import { TrainingModule } from './training/training.module';
import { WorkoutsExercisesModule } from './workouts-exercises/workouts-exercises.module';
import { HistoricalTrainingModule } from './historical-training/historical-training.module';
import { PaymentsModule } from './payments/payments.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MembersModule,
    ExercisesModule,
    TrainingModule,
    WorkoutsExercisesModule,
    HistoricalTrainingModule,
    PaymentsModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class DomainModule {}
