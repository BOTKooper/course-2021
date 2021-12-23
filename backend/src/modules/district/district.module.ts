import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../data/database.module';
import { DistrictResolver } from './resolvers/general.resolver';
import { DistrictService } from './district.service';
import { StoreDistrictResolver } from './resolvers/store.resolver';

@Module({
  imports: [DatabaseModule],
  providers: [
    DistrictResolver,
    StoreDistrictResolver,
    DistrictService,
  ],
  exports: [
    DistrictService,
  ],
})
export class DistrictModule {}
