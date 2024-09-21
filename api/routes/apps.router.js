"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apps_controller_1 = __importDefault(require("../controllers/apps.controller"));
const jwtVerify_middleware_1 = __importDefault(require("../middlewares/jwtVerify.middleware"));
const jwtIdMatchVerify_middleware_1 = __importDefault(require("../middlewares/jwtIdMatchVerify.middleware"));
const jwtRolVerify_middleware_1 = __importDefault(require("../middlewares/jwtRolVerify.middleware"));
const appsRouter = (0, express_1.Router)();
appsRouter.get("/:id", jwtVerify_middleware_1.default.jwtVerify, jwtIdMatchVerify_middleware_1.default.jwtIdMatchVerify, (0, jwtRolVerify_middleware_1.default)(["admin", "junior"]), apps_controller_1.default.getAllApplicationsUserValidate);
appsRouter.post("/:id", jwtVerify_middleware_1.default.jwtVerify, jwtIdMatchVerify_middleware_1.default.jwtIdMatchVerify, (0, jwtRolVerify_middleware_1.default)(["admin", "junior"]), apps_controller_1.default.postApplyToProject);
exports.default = appsRouter;
//# sourceMappingURL=apps.router.js.map