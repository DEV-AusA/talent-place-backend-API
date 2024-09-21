"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_router_1 = __importDefault(require("./users.router"));
const projects_router_1 = __importDefault(require("./projects.router"));
const apps_router_1 = __importDefault(require("./apps.router"));
const auth_router_1 = __importDefault(require("./auth.router"));
const principalRouter = (0, express_1.Router)();
principalRouter.use("/users", users_router_1.default);
principalRouter.use("/projects", projects_router_1.default);
principalRouter.use("/applications", apps_router_1.default);
principalRouter.use("/auth", auth_router_1.default);
exports.default = principalRouter;
//# sourceMappingURL=principal.router.js.map