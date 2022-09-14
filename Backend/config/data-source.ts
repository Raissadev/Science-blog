import "reflect-metadata";
import { DataSource } from "typeorm";
import env from "./environment";

export const ds: DataSource = new DataSource({
    type: "postgres",
    host: env.POSTGRES_HOST,
    port: env.POSTGRES_PORT,
    username: env.POSTGRES_USER,
    password: env.POSTGRES_PASSWORD,
    database: env.POSTGRES_DBNAME,
    logging: false,
    entities: ["app/models/**/*.ts"],
    migrations: ["database/migrations/**/*.ts", "database/seeders/**/*.ts"],
    ssl: false
});

ds.initialize();