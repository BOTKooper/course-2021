import {
  Table, Model, Column, HasMany,
} from 'sequelize-typescript';
import { StoreModel } from './store.model';

export type ISpd = {
  id: number;
  name: string;
  stores: StoreModel[];
};

@Table({
  tableName: 'spd',
  timestamps: false,
})
export class SpdModel extends Model<ISpd, Omit<ISpd, 'id'>> implements ISpd {
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

  @HasMany(() => StoreModel, 'spdId')
  public stores: StoreModel[];
}
