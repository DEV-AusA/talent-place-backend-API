"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const loginRateLimiter = (0, express_rate_limit_1.default)({
    windowMs: 10 * 60 * 1000,
    max: 5,
    message: 'Demasiados intentos de inicio de sesión, por favor intente nuevamente más tarde.'
});
exports.default = loginRateLimiter;
//# sourceMappingURL=rateLimited.middleware.js.map