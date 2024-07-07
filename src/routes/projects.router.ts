import { Router } from "express";
import projectController from "../controllers/project.controller";
import jwtVerifyMiddleware from "../middlewares/jwtVerify.middleware";
import jwtIdMatchVerifyMiddleware from "../middlewares/jwtIdMatchVerify.middleware";
import jwtRolVerify from "../middlewares/jwtRolVerify.middleware";


const projectRouter: Router = Router();

projectRouter.get("/",
    projectController.getAllProjects,
    jwtIdMatchVerifyMiddleware.jwtIdMatchVerify
);

projectRouter.get("/:id",
    projectController.editProject,
    jwtIdMatchVerifyMiddleware.jwtIdMatchVerify
);

//Para empresa
projectRouter.post("/", jwtVerifyMiddleware.jwtVerify,
    jwtIdMatchVerifyMiddleware.jwtIdMatchVerify,
    jwtRolVerify(['empresa']),
    projectController.postNewProject
);

projectRouter.put("/:id",
    jwtVerifyMiddleware.jwtVerify,
    jwtIdMatchVerifyMiddleware.jwtIdMatchVerify,
    jwtRolVerify(['empresa']),
    projectController.editProject
);

projectRouter.delete("/:id",
    jwtVerifyMiddleware.jwtVerify,
    jwtIdMatchVerifyMiddleware.jwtIdMatchVerify,
    jwtRolVerify(['empresa']),
    projectController.deleteProject
);

export default projectRouter