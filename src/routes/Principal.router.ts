import { Router } from "express";
import authRouter from "./Auth.router";

const principalRouter: Router = Router();

// principalRouter.use("/");
principalRouter.use("/auth", authRouter);

export default principalRouter;