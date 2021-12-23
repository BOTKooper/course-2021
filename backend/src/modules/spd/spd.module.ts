import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../data/database.module';
import { StoreSpdResolver } from './resolvers/store.resolver';
import { SpdResolver } from './spd.resolver';
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
