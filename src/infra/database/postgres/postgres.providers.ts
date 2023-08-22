import { DataSource } from 'typeorm';

import { CreateTableUsers1692641554814 } from '../migrations/1692641554814-CreateTableUsers';

export const postgresProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
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
      });

      return dataSource.initialize();
    },
  },
];
