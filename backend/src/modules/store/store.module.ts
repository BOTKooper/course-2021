import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../data/database.module';
import { StoreResolver } from './resolvers/general.resolver';
import { StoreService } from './store.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    StoreResolver,
    StoreService,
  ],
  exports: [
    StoreService,
  ],
})
export class StoreModule {}
