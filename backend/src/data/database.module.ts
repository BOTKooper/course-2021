import { Module } from '@nestjs/common';
import { SequelizeModule, SequelizeModuleOptions } from '@nestjs/sequelize';
import { config } from 'node-config-ts';
import { Dialect } from 'sequelize/types';
import { DistrictModel } from './database/model/district.model';
import { SpdModel } from './database/model/spd.model';
import { StoreModel } from './database/model/store.model';
import { DistrictRepository } from './repository/district.repository';
import { SpdRepository } from './repository/spd.repository';
import { StoreRepository } from './repository/store.repository';

const repositories = [
  DistrictRepository,
  SpdRepository,
  StoreRepository,
];

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      useFactory: (): SequelizeModuleOptions => ({
        ...config.postgres,
        dialect: config.postgres.dialect as Dialect,
      }),
    }),
    SequelizeModule.forFeature([
      DistrictModel,
      SpdModel,
      StoreModel,
    ]),
  ],
  providers: [...repositories],
  exports: [
    ...repositories,
  ],
})
export class DatabaseModule {
}
