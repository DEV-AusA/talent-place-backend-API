"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const jwtVerify_middleware_1 = __importDefault(require("../middlewares/jwtVerify.middleware"));
const jwtIdMatchVerify_middleware_1 = __importDefault(require("../middlewares/jwtIdMatchVerify.middleware"));
const jwtRolVerify_middleware_1 = __importDefault(require("../middlewares/jwtRolVerify.middleware"));
const usersRouter = (0, express_1.Router)();
usersRouter.get("/", jwtVerify_middleware_1.default.jwtVerify, (0, jwtRolVerify_middleware_1.default)(["admin"]), user_controller_1.default.getAllUsers);
usersRouter.get("/me/habilities", user_controller_1.default.getAllUserHabilities);
usersRouter.get("/me/:id", jwtVerify_middleware_1.default.jwtVerify, jwtIdMatchVerify_middleware_1.default.jwtIdMatchVerify, (0, jwtRolVerify_middleware_1.default)(["admin", "junior", "empresa"]), user_controller_1.default.getUserProfile);
usersRouter.put("/me/:id", jwtVerify_middleware_1.default.jwtVerify, jwtIdMatchVerify_middleware_1.default.jwtIdMatchVerify, (0, jwtRolVerify_middleware_1.default)(["admin", "junior"]), user_controller_1.default.editUserData);
exports.default = usersRouter;
//# sourceMappingURL=users.router.js.map