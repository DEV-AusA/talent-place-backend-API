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
const typeorm_1 = require("typeorm");
const typeorm_config_1 = require("../config/typeorm.config");
const usuario_1 = __importDefault(require("../entities/usuario"));
const hability_service_1 = __importDefault(require("./hability.service"));
const userRepository = typeorm_config_1.AppDataSource.getRepository(usuario_1.default);
const getUserProfileByIdService = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const userByQuery = yield userRepository.createQueryBuilder('usuarios')
        .select(["usuarios.id", "usuarios.nombre", "usuarios.email", "usuarios.tipo", "usuarios.autenticacion2FAHabilitada", "usuarios.updatedAt"])
        .where({ id: userId })
        .getOne();
    const user = yield userRepository.findOneBy({ id: userId });
    if (!userByQuery || !user)
        throw ({
            message: "No existe un usuario con ese id",
            code: 404
        });
    return user;
});
const editUserProfileService = (id, userData) => __awaiter(void 0, void 0, void 0, function* () {
    const userByQuery = yield userRepository.createQueryBuilder('usuarios')
        .where({ id })
        .getOne();
    if (!userByQuery)
        throw ({
            message: "No existe un usuario con ese id",
            code: 404
        });
    if (userData.email) {
        const existingUserWithEmail = yield userRepository.findOne({
            where: {
                email: userData.email,
                id: (0, typeorm_1.Not)(id)
            }
        });
        if (existingUserWithEmail)
            throw ({
                message: "El correo electrónico ya está en uso, ingresa otro",
                code: 409
            });
    }
    Object.assign(userByQuery, userData);
    yield userRepository.save(userByQuery);
    const { nombre, apellido, email, tipo, telefono, pais, autenticacion2FAHabilitada, updatedAt } = userByQuery;
    return { id, nombre, apellido, email, tipo, telefono, pais, autenticacion2FAHabilitada, updatedAt };
});
const getAllUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield userRepository.createQueryBuilder('usuarios')
        .select(['usuarios.id', 'usuarios.nombre', 'usuarios.email', 'usuarios.tipo', 'usuarios.autenticacion2FAHabilitada', 'usuarios.updatedAt'])
        .getMany();
    return users;
});
const getAllUsersHabilitiesService = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const habilities = yield hability_service_1.default.getAllHabilities();
        return habilities;
    }
    catch (error) {
        throw error;
    }
});
exports.default = {
    getUserProfileByIdService,
    getAllUsersService,
    editUserProfileService,
    getAllUsersHabilitiesService
};
//# sourceMappingURL=user.service.js.map