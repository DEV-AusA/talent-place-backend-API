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
const proyecto_1 = __importDefault(require("../entities/proyecto"));
const usuario_1 = __importDefault(require("../entities/usuario"));
const category_service_1 = __importDefault(require("./category.service"));
const hability_service_1 = __importDefault(require("./hability.service"));
const projectRepository = typeorm_config_1.AppDataSource.getRepository(proyecto_1.default);
const userRepository = typeorm_config_1.AppDataSource.getRepository(usuario_1.default);
const getAllProjectsService = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const projects = yield projectRepository.find();
        return projects;
    }
    catch (error) {
        throw error;
    }
});
const getProjectByIdService = (projectId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const project = yield projectRepository.findOneBy({ id: projectId });
        if (!project)
            throw ({
                message: "No existe un proyecto con este id",
                code: 404
            });
        return project;
    }
    catch (error) {
        throw error;
    }
});
const postNewProjectService = (id, projectData) => __awaiter(void 0, void 0, void 0, function* () {
    const company = yield findCompanyById(id);
    try {
        const category = yield category_service_1.default.postNewCategory(projectData.categoria);
        const habilities = yield hability_service_1.default.postNewHability(projectData.habilidades);
        const project = yield projectRepository.create({
            titulo: projectData.titulo,
            descripcion: projectData.descripcion,
            requisitos: projectData.requisitos,
            empresaId: id,
            empresaNombre: company.nombre,
            modalidad: projectData.modalidad,
            estado: projectData.estado,
            categoria: category,
            habilidades: habilities
        });
        const newProject = yield projectRepository.save(project);
        const projectCreated = yield getProjectByIdService(newProject.id);
        return projectCreated;
    }
    catch (error) {
        throw error;
    }
});
const editProjectByIdService = (id, projectData) => __awaiter(void 0, void 0, void 0, function* () {
    yield findCompanyById(id);
    yield getProjectByIdService(projectData.projectId);
    try {
        const category = yield category_service_1.default.postNewCategory(projectData.categoria);
        const habilities = yield hability_service_1.default.postNewHability(projectData.habilidades);
        const projectUpdated = yield projectRepository.preload(Object.assign(Object.assign({ id: projectData.projectId }, projectData), { habilidades: habilities, categoria: category }));
        yield projectRepository.save(projectUpdated);
        const project = yield getProjectByIdService(projectData.projectId);
        return project;
    }
    catch (error) {
        throw error;
    }
});
const deleteProjectByIdService = (projectId) => __awaiter(void 0, void 0, void 0, function* () {
    const projectFinded = yield getProjectByIdService(projectId);
    try {
        yield projectRepository.remove(projectFinded);
        return { message: `Proyecto '${projectFinded.titulo}' eliminado con exito` };
    }
    catch (error) {
        throw error;
    }
});
const findCompanyById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const company = yield userRepository.findOneBy({ id });
        if (!company)
            throw ({
                message: "La compañia con ese id no existe",
                code: 404
            });
        return company;
    }
    catch (error) {
        throw error;
    }
});
const getAllProjectsByUserIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield findCompanyById(id);
    try {
        const projects = yield projectRepository.findBy({ empresaId: id });
        return projects;
    }
    catch (error) {
        throw error;
    }
});
const getAllCategoriesService = () => __awaiter(void 0, void 0, void 0, function* () {
    const categories = yield category_service_1.default.getAllCategories();
    return categories;
});
exports.default = {
    getAllProjectsService,
    getProjectByIdService,
    postNewProjectService,
    editProjectByIdService,
    deleteProjectByIdService,
    getAllProjectsByUserIdService,
    getAllCategoriesService
};
//# sourceMappingURL=project.service.js.map