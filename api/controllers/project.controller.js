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
const catchAsync_util_1 = __importDefault(require("../utils/catchAsync.util"));
const project_service_1 = __importDefault(require("../services/project.service"));
const getAllProjects = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const projects = yield project_service_1.default.getAllProjectsService();
    res.status(200).json(projects);
});
const getProyectById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { projectId } = req.query;
    const project = yield project_service_1.default.getProjectByIdService(projectId);
    res.status(200).json(project);
});
const postNewProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const projectData = req.body;
    const projectOk = yield project_service_1.default.postNewProjectService(id, projectData);
    res.status(200).json(projectOk);
});
const editProjectById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const projectData = req.body;
    const projectUpdated = yield project_service_1.default.editProjectByIdService(id, projectData);
    res.status(200).json(projectUpdated);
});
const deleteProjectById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { projectId } = req.query;
    const projectDeleted = yield project_service_1.default.deleteProjectByIdService(projectId);
    res.status(200).json(projectDeleted);
});
const getAllProjectsByUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const projects = yield project_service_1.default.getAllProjectsByUserIdService(id);
    res.status(200).json(projects);
});
const getAllCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categories = yield project_service_1.default.getAllCategoriesService();
    res.status(200).json(categories);
});
exports.default = {
    getAllProjects: (0, catchAsync_util_1.default)(getAllProjects),
    getProyectById: (0, catchAsync_util_1.default)(getProyectById),
    postNewProject: (0, catchAsync_util_1.default)(postNewProject),
    editProjectById: (0, catchAsync_util_1.default)(editProjectById),
    deleteProjectById: (0, catchAsync_util_1.default)(deleteProjectById),
    getAllProjectsByUserId: (0, catchAsync_util_1.default)(getAllProjectsByUserId),
    getAllCategories: (0, catchAsync_util_1.default)(getAllCategories),
};
//# sourceMappingURL=project.controller.js.map