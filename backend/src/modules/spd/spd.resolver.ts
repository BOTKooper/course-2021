import { Resolver } from '@nestjs/graphql';
import { SpdService } from './spd.service';

@Resolver()
export class SpdResolver {
  public constructor(
    private readonly spdService: SpdService,
  ) {}
}
