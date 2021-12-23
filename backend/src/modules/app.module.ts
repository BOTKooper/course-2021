import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { DatabaseModule } from '../data/database.module';
import { DistrictModule } from './district/district.module';
import { SpdModule } from './spd/spd.module';
import { StoreModule } from './store/store.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      playground: true,
      debug: true,
      typePaths: ['./**/*.gql'],
      context: ({ req }) => ({ req }),
    }),
    DatabaseModule,
    DistrictModule,
    SpdModule,
    StoreModule,
  ],
})
export class AppModule {}
