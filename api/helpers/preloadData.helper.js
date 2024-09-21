"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.preloadUsersData = void 0;
const typeorm_config_1 = require("../config/typeorm.config");
const bcrypt = __importStar(require("bcryptjs"));
const usuario_1 = __importDefault(require("../entities/usuario"));
const usersData_helper_1 = require("./usersData.helper");
const proyecto_1 = __importDefault(require("../entities/proyecto"));
const projectsData_helper_1 = require("./projectsData.helper");
const hability_service_1 = __importDefault(require("../services/hability.service"));
const category_service_1 = __importDefault(require("../services/category.service"));
const UserRepository = typeorm_config_1.AppDataSource.getRepository(usuario_1.default);
const ProjectRepository = typeorm_config_1.AppDataSource.getRepository(proyecto_1.default);
const preloadUsersData = () => __awaiter(void 0, void 0, void 0, function* () {
    yield typeorm_config_1.AppDataSource.manager.transaction((transactionalEntityManager) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, e_1, _b, _c;
        const users = yield UserRepository.find();
        if (users.length)
            return console.log(`No se hizo precarga de usuarios porque ya hay ${users.length} usuarios cargados`);
        try {
            for (var _d = true, preloadUsers_1 = __asyncValues(usersData_helper_1.preloadUsers), preloadUsers_1_1; preloadUsers_1_1 = yield preloadUsers_1.next(), _a = preloadUsers_1_1.done, !_a; _d = true) {
                _c = preloadUsers_1_1.value;
                _d = false;
                const user = _c;
                const newUser = yield UserRepository.create(Object.assign(Object.assign({}, user), { contrasenia: yield bcrypt.hash(user.contrasenia, 10) }));
                yield transactionalEntityManager.save(newUser);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (!_d && !_a && (_b = preloadUsers_1.return)) yield _b.call(preloadUsers_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        console.log("Precarga de Usuarios del Preload realizada con éxito");
    }));
    yield typeorm_config_1.AppDataSource.manager.transaction((transactionalEntityManager) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, e_2, _b, _c;
        const userCompany = yield UserRepository.findOneBy({ email: "nicoausa@gmail.com" });
        try {
            for (var _d = true, preloadProjects_1 = __asyncValues(projectsData_helper_1.preloadProjects), preloadProjects_1_1; preloadProjects_1_1 = yield preloadProjects_1.next(), _a = preloadProjects_1_1.done, !_a; _d = true) {
                _c = preloadProjects_1_1.value;
                _d = false;
                const project = _c;
                const existingProject = yield ProjectRepository.findOne({
                    where: { titulo: project.titulo },
                    relations: ['categoria', 'habilidades']
                });
                const category = yield category_service_1.default.postNewCategory(project.categoria);
                const habilities = yield hability_service_1.default.postNewHability(project.habilidades);
                if (existingProject) {
                    existingProject.categoria = category;
                    existingProject.habilidades = habilities;
                    existingProject.empresaNombre = userCompany.nombre;
                    yield transactionalEntityManager.save(existingProject);
                }
                else {
                    const newProject = ProjectRepository.create(Object.assign(Object.assign({}, project), { empresaId: userCompany.id, empresaNombre: userCompany.nombre, categoria: category, habilidades: habilities }));
                    yield transactionalEntityManager.save(newProject);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (!_d && !_a && (_b = preloadProjects_1.return)) yield _b.call(preloadProjects_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        console.log("Precarga de Proyectos del Preload realizada con éxito");
    }));
});
exports.preloadUsersData = preloadUsersData;
//# sourceMappingURL=preloadData.helper.js.map