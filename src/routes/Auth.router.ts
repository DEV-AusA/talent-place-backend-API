import { Router } from "express";
import AuthController from "../controllers/auth.controller";

const authRouter: Router = Router();

authRouter.post("/2fa/setup", AuthController.postAuth2FaSetup);
authRouter.post("/2fa/verify", AuthController.postAuth2FaVerify);

export default authRouter;