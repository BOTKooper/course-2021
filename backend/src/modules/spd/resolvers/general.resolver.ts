import {
  Resolver, Query, Args, Mutation,
} from '@nestjs/graphql';
import { Nullable } from '../../../common/nullable.type';
import { ISpd } from '../../../data/database/model/spd.model';
import { SpdService } from '../spd.service';

@Resolver()
export class SpdResolver {
  public constructor(
    private readonly spdService: SpdService,
  ) {}

  @Query()
  public getAllSpds(): Promise<ISpd[]> {
    return this.spdService.getAllSpds();
  }

  @Query()
  public getSpdById(@Args('id') id: number): Promise<Nullable<ISpd>> {
    return this.spdService.getById(id);
  }

  @Mutation()
  public async deleteSpd(@Args('id') id: string): Promise<boolean> {
    await this.spdService.deleteById(+id);
    return true;
  }

  @Mutation()
  public createSpd(@Args('name') name: string): Promise<ISpd> {
    return this.spdService.create(name);
  }
}
