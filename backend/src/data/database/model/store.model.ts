import {
  Table, Model, Column, ForeignKey,
} from 'sequelize-typescript';
import { DistrictModel } from './district.model';
import { SpdModel } from './spd.model';

export type IStore = {
  id: number;
  name: string;
  spdId: number;
  districtId: number;
  street: string;
  hours: string;
};

@Table({
  tableName: 'store',
  timestamps: false,
})
export class StoreModel extends Model<IStore, Omit<IStore, 'id'>> implements IStore {
  @Column({
    primaryKey: true,
    unique: true,
    allowNull: false,
    autoIncrement: true,
  })
  public id: number;

  @Column({
    allowNull: false,
  })
  public name: string;

  @Column({
    allowNull: false,
  })
  @ForeignKey(() => SpdModel)
  public spdId: number;

  @Column({
    allowNull: false,
  })
  @ForeignKey(() => DistrictModel)
  public districtId: number;

  @Column({
    allowNull: false,
  })
  public street: string;

  @Column({})
  public hours: string;
}
