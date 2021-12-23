import { Resolver, ResolveField, Parent } from '@nestjs/graphql';
import DataLoader from 'dataloader';
import { Nullable } from '../../../common/nullable.type';
import { IDistrict } from '../../../data/database/model/district.model';
import { DistrictService } from '../district.service';

@Resolver('Store')
export class StoreDistrictResolver {
  private readonly dataLoader: DataLoader<number, Nullable<IDistrict>>;

  public constructor(
    private readonly districtService: DistrictService,
  ) {
    this.dataLoader = new DataLoader((keys) => this.districtService.getByIds(keys), { cache: false });
  }

  @ResolveField()
  public district(@Parent() { districtId }: { districtId: string }): Promise<Nullable<IDistrict>> {
    return this.dataLoader.load(+districtId);
  }
}
