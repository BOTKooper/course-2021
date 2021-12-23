import {
  Table, Model, Column, ForeignKey,
} from 'sequelize-typescript';
import { District } from './district.model';
import { Spd } from './spd.model';

type IStore = {
  id: number;
  name: string;
  spdId: number;
  districtId: number;
  address: string;
};

@Table
export class Store extends Model<IStore, Omit<IStore, 'id'>> implements IStore {
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

  @Column({
    allowNull: false,
  })
  @ForeignKey(() => Spd)
  public spdId: number;

  @Column({
    allowNull: false,
    unique: true,
  })
  @ForeignKey(() => District)
  public districtId: number;

  @Column({
    allowNull: false,
    unique: true,
  })
  public address: string;
}
