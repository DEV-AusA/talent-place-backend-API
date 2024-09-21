"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
require("reflect-metadata");
const typeorm_config_1 = require("./config/typeorm.config");
const preloadData_helper_1 = require("./helpers/preloadData.helper");
const swagger_1 = __importDefault(require("./doc/swagger"));
function serverOn() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield typeorm_config_1.AppDataSource.initialize();
            console.log("Conexion a la base de datos realizada con exito");
            yield (0, preloadData_helper_1.preloadUsersData)();
            server_1.default.listen(process.env.PORT, () => {
                console.log(`Jarvis operativo y atento señor, en guardia mediante sus ${process.env.PORT} millones de neurotransmisores`);
                (0, swagger_1.default)(server_1.default, process.env.PORT);
            });
        }
        catch (error) {
            console.error("Error al inicializar el servidor:", error);
        }
    });
}
serverOn();
//# sourceMappingURL=index.js.map