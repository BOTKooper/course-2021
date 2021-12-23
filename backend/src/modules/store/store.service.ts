/* eslint-disable no-param-reassign */
import { Injectable } from '@nestjs/common';
import { Nullable } from '../../common/nullable.type';
import { IStore } from '../../data/database/model/store.model';
import { StoreRepository } from '../../data/repository/store.repository';

export type CreateStoreInput = {
  name: string;
  street: string;
  hours: string;
  districtId: number;
  spdId: number;
};

@Injectable()
export class StoreService {
  public constructor(
    private readonly storeRepository: StoreRepository,
  ) {}

  public getAllStores(): Promise<IStore[]> {
    return this.storeRepository.findAll();
  }

  public getById(id: number): Promise<Nullable<IStore>> {
    return this.storeRepository.getById(id);
  }

  public deleteById(id: number): Promise<void> {
    return this.storeRepository.delete({ id });
  }

  public create(data: CreateStoreInput): Promise<IStore> {
    return this.storeRepository.create(data);
  }

  public update(id: number, data: Partial<CreateStoreInput>): Promise<IStore> {
    if (data.districtId) {
      data.districtId = +data.districtId;
    }
    if (data.spdId) {
      data.spdId = +data.spdId;
    }
    return this.storeRepository.update(id, data);
  }
}
