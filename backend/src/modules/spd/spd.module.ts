import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../data/database.module';
import { SpdResolver } from './resolvers/general.resolver';
import { StoreSpdResolver } from './resolvers/store.resolver';
import { SpdService } from './spd.service';

@Module({
  imports: [
    DatabaseModule,
  ],
  providers: [
    SpdResolver,
    StoreSpdResolver,
    SpdService,
  ],
  exports: [
    SpdService,
  ],
})
export class SpdModule {}
