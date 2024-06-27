import { Router } from "express";
import authRouter from "./auth.router";

const principalRouter: Router = Router();

// principalRouter.use("/");
principalRouter.use("/auth", authRouter);

export default principalRouter;