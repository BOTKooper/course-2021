import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Nullable } from '../../common/nullable.type';
import { ISpd, SpdModel } from '../database/model/spd.model';

type WhereOpts = Partial<Omit<ISpd, 'stores'>>;

@Injectable()
export class SpdRepository {
  public constructor(
    @InjectModel(SpdModel) private readonly spdModel: typeof SpdModel,
  ) {}

  public async create(data: Omit<WhereOpts, 'id'>): Promise<ISpd> {
    return this.spdModel.create(data, { raw: true });
  }

  public async getById(id: number): Promise<Nullable<ISpd>> {
    return this.spdModel.findByPk(id);
  }

  public async findAll(where?: WhereOpts): Promise<ISpd[]> {
    return this.spdModel.findAll({ where, raw: true });
  }

  public async delete(where: WhereOpts): Promise<void> {
    await this.spdModel.destroy({ where, cascade: true });
  }
}
