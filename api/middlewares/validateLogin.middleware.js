"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const catchAsync_util_1 = __importDefault(require("../utils/catchAsync.util"));
const validateLoginData = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, contrasenia } = req.body;
    if (!email || !contrasenia)
        throw ({
            message: 'Correo electrónico y contraseña son obligatorios',
            code: 400
        });
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email))
        throw ({
            message: 'Formato de correo electrónico no válido',
            code: 400
        });
    next();
});
exports.default = {
    validateLoginData: (0, catchAsync_util_1.default)(validateLoginData)
};
//# sourceMappingURL=validateLogin.middleware.js.map