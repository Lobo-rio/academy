import { Module } from '@nestjs/common';

import { postgresProviders } from './postgres/postgres.providers';

@Module({
  providers: [...postgresProviders],
  exports: [...postgresProviders],
})
export class DatabaseModule {}
