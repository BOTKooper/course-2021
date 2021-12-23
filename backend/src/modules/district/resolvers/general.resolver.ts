import {
  Resolver, Query, Args, Mutation,
} from '@nestjs/graphql';
import { Nullable } from '../../../common/nullable.type';
import { IDistrict } from '../../../data/database/model/district.model';
import { DistrictService } from '../district.service';

@Resolver()
export class DistrictResolver {
  public constructor(
    private readonly districtService: DistrictService,
  ) {}

  @Query()
  public getAllDistricts(): Promise<IDistrict[]> {
    return this.districtService.getAllDistricts();
  }

  @Query()
  public getDistrictById(@Args('id') id: number): Promise<Nullable<IDistrict>> {
    return this.districtService.getById(id);
  }

  @Mutation()
  public async deleteDistrict(@Args('id') id: string): Promise<boolean> {
    await this.districtService.deleteById(+id);
    return true;
  }

  @Mutation()
  public createDistrict(@Args('name') name: string): Promise<IDistrict> {
    return this.districtService.create(name);
  }
}
