/* tslint:disable */
/* eslint-disable */
declare module "node-config-ts" {
  interface IConfig {
    application: Application
    postgres: Postgres
  }
  interface Postgres {
    dialect: string
    synchronize: boolean
    logging: boolean
    database: string
    port: number
    host: string
    username: string
    password: string
    autoLoadModels: boolean
  }
  interface Application {
    port: number
  }
  export const config: Config
  export type Config = IConfig
}
