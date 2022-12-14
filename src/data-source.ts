import "reflect-metadata";
import { DataSource } from "typeorm";
import { Operation } from "./entity/Operation";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "operations_challenge",
  synchronize: true,
  logging: false,
  entities: [Operation],
  migrations: [],
  subscribers: [],
});
