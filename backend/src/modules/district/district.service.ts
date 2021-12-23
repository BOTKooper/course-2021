import { Injectable } from '@nestjs/common';
import { Nullable } from '../../common/nullable.type';
import { IDistrict } from '../../data/database/model/district.model';
import { DistrictRepository } from '../../data/repository/district.repository';

@Injectable()
export class DistrictService {
  public constructor(
    private readonly districtRepository: DistrictRepository,
  ) {}

  public getAllDistricts(): Promise<IDistrict[]> {
    return this.districtRepository.findAll();
  }

  public getById(id: number): Promise<Nullable<IDistrict>> {
    return this.districtRepository.getById(id);
  }

  public async getByIds(ids: readonly number[]): Promise<Nullable<IDistrict>[]> {
    const results = new Map<number, Nullable<IDistrict>>();
    const dedupedIds = Array.from(new Set(ids));
    await Promise.all(dedupedIds.map(async (id) => {
      const data = await this.getById(id);
      results.set(id, data);
    }));
    return ids.map((id) => results.get(id)!);
  }

  public deleteById(id: number): Promise<void> {
    return this.districtRepository.delete({ id });
  }

  public create(name: string): Promise<IDistrict> {
    return this.districtRepository.create({ name });
  }
}
