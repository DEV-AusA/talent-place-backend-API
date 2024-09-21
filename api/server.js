"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const principal_router_1 = __importDefault(require("./routes/principal.router"));
const cors_1 = __importDefault(require("cors"));
const logger_middleware_1 = require("./middlewares/logger.middleware");
const server = (0, express_1.default)();
server.use((0, cors_1.default)());
server.use(express_1.default.json());
server.use(logger_middleware_1.loggerGlobal);
server.use(principal_router_1.default);
server.use((err, req, res, next) => {
    res.status(err.code || 500).json(err);
});
exports.default = server;
//# sourceMappingURL=server.js.map