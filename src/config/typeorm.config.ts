import { DataSource } from "typeorm"
import { config as dotenvConfig } from 'dotenv';
import Usuarios from "src/entities/Usuario";
import Proyectos from "src/entities/Proyecto";
import Aplicaciones from "src/entities/Aplicacion";
import Comentarios from "src/entities/Comentario";
import Pagos from "src/entities/Pago";

dotenvConfig({ path: '.env' });

export const AppDataSource = new DataSource({
    type: "postgres",
    port: 5432,
    host: 'postgresdb',
    // host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME_DATABASE,
    dropSchema: true,
    synchronize: true,
    logging: false,
    entities: [ Usuarios , Aplicaciones , Comentarios , Pagos , Proyectos ],
    subscribers: [],
    migrations: [],
})