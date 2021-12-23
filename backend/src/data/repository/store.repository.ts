import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Nullable } from '../../common/nullable.type';
import { IStore, StoreModel } from '../database/model/store.model';

@Injectable()
export class StoreRepository {
  public constructor(
    @InjectModel(StoreModel) private readonly storeModel: typeof StoreModel,
  ) {}

  public async create(data: Omit<IStore, 'id'>): Promise<IStore> {
    return this.storeModel.create(data, { raw: true });
  }

  public async getById(id: number): Promise<Nullable<IStore>> {
    return this.storeModel.findByPk(id);
  }

  public async findAll(where?: Partial<IStore>): Promise<IStore[]> {
    return this.storeModel.findAll({ where, raw: true });
  }

  public async delete(where: Partial<IStore>): Promise<void> {
    await this.storeModel.destroy({ where });
  }
}
