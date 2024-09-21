"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jwtVerify_middleware_1 = __importDefault(require("../middlewares/jwtVerify.middleware"));
const auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
const validateRegister_middleware_1 = __importDefault(require("../middlewares/validateRegister.middleware"));
const validateLogin_middleware_1 = __importDefault(require("../middlewares/validateLogin.middleware"));
const authRouter = (0, express_1.Router)();
authRouter.post("/2fa/setup", jwtVerify_middleware_1.default.jwtVerify, auth_controller_1.default.postAuth2FaSetup);
authRouter.post("/2fa/verify", auth_controller_1.default.postAuth2FaVerify);
authRouter.post("/register", validateRegister_middleware_1.default.validateRegisterData, auth_controller_1.default.postUser);
authRouter.post("/login", validateLogin_middleware_1.default.validateLoginData, auth_controller_1.default.authLogin);
exports.default = authRouter;
//# sourceMappingURL=auth.router.js.map