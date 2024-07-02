import { Router } from "express";
import userRouter from './uusers.rorouter'
import projectRouter from './pprojects.rorouter'
import appsRouter from './aapps.rorouter'
import authRouter from "./aauth.rorouter";

const principalRouter: Router = Router();

principalRouter.use("/users", userRouter);
principalRouter.use("/projects", projectRouter);
principalRouter.use("/applications", appsRouter);
principalRouter.use("/auth", authRouter);

export default principalRouter;