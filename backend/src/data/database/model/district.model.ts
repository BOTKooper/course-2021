import {
  Table, Model, Column, HasMany,
} from 'sequelize-typescript';
import { Store } from './store.model';

type IDistrict = {
  id: number;
  name: string;
};

@Table
export class District extends Model<IDistrict, Omit<IDistrict, 'id'>> implements IDistrict {
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

  @HasMany(() => Store, 'districtId')
  public stores: Store;
}
