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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const catchAsync_util_1 = __importDefault(require("../utils/catchAsync.util"));
const jwtVerify = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const isToken = req.headers['authorization'];
    if (!isToken)
        throw ({
            message: 'Necesitas loguearte para acceder a esta seccion.',
            code: 401
        });
    const tokenBearer = req.headers['authorization'].split(' ');
    if (tokenBearer.length !== 2 || tokenBearer[0] !== 'Bearer')
        throw ({
            message: 'El token no existe o el formato es incorrecto.',
            code: 401
        });
    const token = (_a = req.headers['authorization'].split(' ')[1]) !== null && _a !== void 0 ? _a : '';
    const secret = process.env.JWT_SECRET;
    try {
        const payload = jsonwebtoken_1.default.verify(token, secret);
        payload.iatDate = new Date(payload.iat * 1000);
        payload.expDate = new Date(payload.exp * 1000);
        payload.tipo =
            payload.tipo === 'admin'
                ? ['admin']
                : payload.tipo === 'empresa'
                    ? ['empresa']
                    : ['junior'];
        req.user = payload;
        return next();
    }
    catch (error) {
        throw ({
            message: 'Token invalido o vencido.',
            code: 401
        });
        ;
    }
});
exports.default = {
    jwtVerify: (0, catchAsync_util_1.default)(jwtVerify)
};
//# sourceMappingURL=jwtVerify.middleware.js.map