import {
  Table, Model, Column, HasMany,
} from 'sequelize-typescript';
import { StoreModel } from './store.model';

export type IDistrict = {
  id: number;
  name: string;
  stores: StoreModel[];
};

@Table({
  tableName: 'district',
  timestamps: false,
})
export class DistrictModel extends Model<IDistrict, Omit<IDistrict, 'id'>> implements IDistrict {
  @Column({
    primaryKey: true,
    unique: true,
    allowNull: false,
    autoIncrement: true,
  })
  public id: number;

  @Column({
    allowNull: false,
    unique: true,
  })
  public name: string;

  @HasMany(() => StoreModel, 'districtId')
  public stores: StoreModel[];
}
