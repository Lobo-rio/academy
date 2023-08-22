import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DomainModule } from './domain/domain.module';
import { CreateTableUsers1692641554814 } from './infra/database/migrations/1692641554814-CreateTableUsers';

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
        ],
        migrationsRun: true,
    }),
    DomainModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
