"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const dotenv_1 = require("dotenv");
const usuario_1 = __importDefault(require("../entities/usuario"));
const proyecto_1 = __importDefault(require("../entities/proyecto"));
const aplicacion_1 = __importDefault(require("../entities/aplicacion"));
const comentario_1 = __importDefault(require("../entities/comentario"));
const pago_1 = __importDefault(require("../entities/pago"));
const categoria_1 = __importDefault(require("../entities/categoria"));
const habilidad_1 = require("../entities/habilidad");
(0, dotenv_1.config)({ path: '.env' });
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    port: 5432,
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME_DATABASE,
    synchronize: true,
    logging: false,
    entities: [usuario_1.default, aplicacion_1.default, comentario_1.default, pago_1.default, proyecto_1.default, categoria_1.default, habilidad_1.Habilidad],
    subscribers: [],
    migrations: [],
    ssl: true,
    cache: true,
    maxQueryExecutionTime: 1000,
    extra: {
        ssl: {
            rejectUnauthorized: false,
        },
    },
});
//# sourceMappingURL=typeorm.config.js.map