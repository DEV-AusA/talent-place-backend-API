"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const project_controller_1 = __importDefault(require("../controllers/project.controller"));
const jwtVerify_middleware_1 = __importDefault(require("../middlewares/jwtVerify.middleware"));
const jwtIdMatchVerify_middleware_1 = __importDefault(require("../middlewares/jwtIdMatchVerify.middleware"));
const jwtRolVerify_middleware_1 = __importDefault(require("../middlewares/jwtRolVerify.middleware"));
const projectRouter = (0, express_1.Router)();
projectRouter.get("/", project_controller_1.default.getAllProjects);
projectRouter.get("/categories", project_controller_1.default.getAllCategories);
projectRouter.get("/:id", jwtVerify_middleware_1.default.jwtVerify, jwtIdMatchVerify_middleware_1.default.jwtIdMatchVerify, (0, jwtRolVerify_middleware_1.default)(['empresa', 'junior', 'admin']), project_controller_1.default.getProyectById);
projectRouter.post("/:id", jwtVerify_middleware_1.default.jwtVerify, jwtIdMatchVerify_middleware_1.default.jwtIdMatchVerify, (0, jwtRolVerify_middleware_1.default)(['empresa', 'admin']), project_controller_1.default.postNewProject);
projectRouter.put("/:id", jwtVerify_middleware_1.default.jwtVerify, jwtIdMatchVerify_middleware_1.default.jwtIdMatchVerify, (0, jwtRolVerify_middleware_1.default)(['empresa', 'admin']), project_controller_1.default.editProjectById);
projectRouter.delete("/:id", jwtVerify_middleware_1.default.jwtVerify, jwtIdMatchVerify_middleware_1.default.jwtIdMatchVerify, (0, jwtRolVerify_middleware_1.default)(['empresa', 'admin']), project_controller_1.default.deleteProjectById);
projectRouter.get("/user/:id", jwtVerify_middleware_1.default.jwtVerify, jwtIdMatchVerify_middleware_1.default.jwtIdMatchVerify, (0, jwtRolVerify_middleware_1.default)(['empresa', 'admin']), project_controller_1.default.getAllProjectsByUserId);
exports.default = projectRouter;
//# sourceMappingURL=projects.router.js.map