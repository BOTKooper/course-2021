import { Resolver, ResolveField, Parent } from '@nestjs/graphql';
import DataLoader from 'dataloader';
import { Nullable } from '../../../common/nullable.type';
import { ISpd } from '../../../data/database/model/spd.model';
import { SpdService } from '../spd.service';

@Resolver('Store')
export class StoreSpdResolver {
  private readonly dataLoader: DataLoader<number, Nullable<ISpd>>;

  public constructor(
    private readonly spdService: SpdService,
  ) {
    this.dataLoader = new DataLoader((keys) => this.spdService.getByIds(keys), { cache: true });
  }

  @ResolveField()
  public spd(@Parent() { spdId }: { spdId: string }): Promise<Nullable<ISpd>> {
    return this.dataLoader.load(+spdId);
  }
}
