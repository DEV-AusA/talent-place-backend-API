import { Router } from "express";
import projectController from "../controllers/project.controller";
import jwtVerifyMiddleware from "../middlewares/jwtVerify.middleware";


const projectRouter: Router = Router();

projectRouter.get("/", projectController.getAllProjects)

projectRouter.get("/:id", projectController.editProject)

//Para empresa
projectRouter.post("/", jwtVerifyMiddleware.jwtVerify, projectController.postNewProject)

projectRouter.put("/:id", jwtVerifyMiddleware.jwtVerify, projectController.editProject)

projectRouter.delete("/:id", jwtVerifyMiddleware.jwtVerify, projectController.deleteProject)

export default projectRouter