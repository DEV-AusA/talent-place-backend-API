"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const limiterGlobal = (0, express_rate_limit_1.default)({
    windowMs: 10 * 60 * 1000,
    max: 100,
    message: 'Demasiadas solicitudes desde esta IP, por favor intente de nuevo después de 10 minutos'
});
exports.default = limiterGlobal;
//# sourceMappingURL=rateLimit.config.js.map