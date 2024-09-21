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
const typeorm_config_1 = require("../config/typeorm.config");
const aplicacion_1 = __importDefault(require("../entities/aplicacion"));
const usuario_1 = __importDefault(require("../entities/usuario"));
const project_service_1 = __importDefault(require("./project.service"));
const applicationRepository = typeorm_config_1.AppDataSource.getRepository(aplicacion_1.default);
const userRepository = typeorm_config_1.AppDataSource.getRepository(usuario_1.default);
const getApplicationsUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userRepository.findOneBy({ id: userId });
        if (!user)
            throw ({
                message: "No existe un usuario con ese id",
                code: 404
            });
        const applications = yield applicationRepository.find({
            where: { juniorId: userId }
        });
        if (applications.length === 0)
            return [];
        return applications;
    }
    catch (error) {
        throw error;
    }
});
const postApplyUserToProject = (userId, proyectoId) => __awaiter(void 0, void 0, void 0, function* () {
    if (!userId || !proyectoId)
        throw ({
            message: "Es requisito el userId y el proyectoId",
            code: 400
        });
    try {
        yield project_service_1.default.getProjectByIdService(proyectoId);
        const verifyExistingApplication = yield applicationRepository.findOne({
            where: {
                proyectoId,
                juniorId: userId
            }
        });
        if (verifyExistingApplication)
            throw ({
                message: "Ya aplicaste a este proyecto",
                code: 302
            });
        const newApplication = new aplicacion_1.default();
        newApplication.proyectoId = proyectoId;
        newApplication.juniorId = userId;
        newApplication.estado = true;
        yield applicationRepository.save(newApplication);
        return { message: "Aplicacion realizada, ¡mucha suerte!" };
    }
    catch (error) {
        throw error;
    }
});
exports.default = {
    getApplicationsUser,
    postApplyUserToProject
};
//# sourceMappingURL=apps.service.js.map