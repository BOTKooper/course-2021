import {
  Table, Model, Column, HasMany,
} from 'sequelize-typescript';
import { Store } from './store.model';

type ISpd = {
  id: number;
  name: string;
};

@Table
export class Spd extends Model<ISpd, Omit<ISpd, 'id'>> implements ISpd {
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

  @HasMany(() => Store, 'spdId')
  public stores: Store[];
}
