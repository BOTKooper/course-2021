import { config } from "node-config-ts";

import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { District } from "./model/district.model";
import { Spd } from "./model/spd.model";
import { Store } from "./model/store.model";


export const SequelizeConnection: Sequelize = new Sequelize(config.postgres as SequelizeOptions);

SequelizeConnection.addModels([District, Spd, Store]);
