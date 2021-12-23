import { Injectable } from '@nestjs/common';
import { Nullable } from '../../common/nullable.type';
import { ISpd } from '../../data/database/model/spd.model';
import { SpdRepository } from '../../data/repository/spd.repository';

@Injectable()
export class SpdService {
  public constructor(
    private readonly spdRepository: SpdRepository,
  ) {}

  public getAllSpds(): Promise<ISpd[]> {
    return this.spdRepository.findAll();
  }

  public getById(id: number): Promise<Nullable<ISpd>> {
    return this.spdRepository.getById(id);
  }

  public async getByIds(ids: readonly number[]): Promise<Nullable<ISpd>[]> {
    const results = new Map<number, Nullable<ISpd>>();
    const dedupedIds = Array.from(new Set(ids));
    await Promise.all(dedupedIds.map(async (id) => {
      const data = await this.getById(id);
      results.set(id, data);
    }));
    return ids.map((id) => results.get(id)!);
  }

  public deleteById(id: number): Promise<void> {
    return this.spdRepository.delete({ id });
  }

  public create(name: string): Promise<ISpd> {
    return this.spdRepository.create({ name });
  }
}
