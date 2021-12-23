import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Nullable } from '../../common/nullable.type';
import { DistrictModel, IDistrict } from '../database/model/district.model';

type WhereOpts = Partial<Omit<IDistrict, 'stores'>>;

@Injectable()
export class DistrictRepository {
  public constructor(
    @InjectModel(DistrictModel) private readonly districtModel: typeof DistrictModel,
  ) {}

  public async create(data: Omit<WhereOpts, 'id'>): Promise<IDistrict> {
    return this.districtModel.create(data, { raw: true });
  }

  public async getById(id: number): Promise<Nullable<IDistrict>> {
    return this.districtModel.findByPk(id);
  }

  public async findAll(where?: WhereOpts): Promise<IDistrict[]> {
    return this.districtModel.findAll({ where, raw: true });
  }

  public async delete(where: WhereOpts): Promise<void> {
    await this.districtModel.destroy({ where, cascade: true });
  }

  public async update(id: number, name: IDistrict['name']): Promise<IDistrict> {
    const [, [store]] = await this.districtModel.update({ name }, { where: { id }, raw: true, returning: true });
    return store;
  }
}
