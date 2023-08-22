import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DomainModule } from './domain/domain.module';
import { CreateTableUsers1692641554814 } from './infra/database/migrations/1692641554814-CreateTableUsers';
import { CreateTableMember1692706551372 } from './infra/database/migrations/1692706551372-CreateTableMember';
import { CreateTableExercise1692706576810 } from './infra/database/migrations/1692706576810-CreateTableExercise';
import { CreateTableHistoricalTraining1692706615641 } from './infra/database/migrations/1692706615641-CreateTableHistoricalTraining';
import { CreateTablePayment1692709194050 } from './infra/database/migrations/1692709194050-CreateTablePayment';
import { CreateTableTraining1692709591044 } from './infra/database/migrations/1692709591044-CreateTableTraining';
import { CreateTableWorkoutExercise1692710265259 } from './infra/database/migrations/1692710265259-CreateTableWorkoutExercise';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: +process.env.POSTGRES_PORT,
        username: process.env.POSTGRES_USERNAME,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DATABASE,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: false,
        migrations: [ 
          CreateTableUsers1692641554814,
          CreateTableMember1692706551372,
          CreateTableExercise1692706576810,
          CreateTableHistoricalTraining1692706615641,
          CreateTablePayment1692709194050,
          CreateTableTraining1692709591044,
          CreateTableWorkoutExercise1692710265259,
        ],
        migrationsRun: true,
    }),
    DomainModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
