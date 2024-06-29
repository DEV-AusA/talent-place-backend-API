import { DataSource } from "typeorm"
import { config as dotenvConfig } from 'dotenv';
import { Users } from "../entities/users";

dotenvConfig({ path: '.env' });

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    dropSchema: true, // <= esta propiedad borra toda la DB si esta activado
    synchronize: true,
    logging: true, // ["error"], <= solo muestre errores de la DB
    entities: [Users],
    subscribers: [],
    migrations: [],
})