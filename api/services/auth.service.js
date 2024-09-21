"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const speakeasy = __importStar(require("speakeasy"));
const qrcode = __importStar(require("qrcode"));
const typeorm_config_1 = require("../config/typeorm.config");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const usuario_1 = __importDefault(require("../entities/usuario"));
const userRepository = typeorm_config_1.AppDataSource.getRepository(usuario_1.default);
const auth2FaSetupService = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const secret = speakeasy.generateSecret({
        name: process.env.SPEAKEASY_NAME
    });
    try {
        const user = yield findUserById(userId);
        yield updateUserSecret2Fa(user, secret.ascii);
        const qrCodeDatUrL = yield qrcode.toDataURL(secret.otpauth_url);
        return qrCodeDatUrL;
    }
    catch (error) {
        throw error;
    }
});
const findUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userRepository.findOneBy({ id });
        if (!user)
            throw ({
                message: `No existe el usuario con id ${id}`,
                code: 404
            });
        return user;
    }
    catch (error) {
        throw error;
    }
});
const auth2FaVerifyService = (userId, token) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield findUserById(userId);
    const dataVerified = {
        secret: user.autenticacion2FASecreto,
        encoding: "ascii",
        token,
    };
    try {
        const verified = speakeasy.totp.verify(dataVerified);
        return verified;
    }
    catch (error) {
        throw error;
    }
});
const updateUserSecret2Fa = (user, secret) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!user.autenticacion2FAHabilitada) {
            yield userRepository.update(user.id, {
                autenticacion2FAHabilitada: true,
                autenticacion2FASecreto: secret
            });
        }
    }
    catch (error) {
        throw error;
    }
});
const createUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existingUser = yield userRepository.findOne({ where: { email: userData.email } });
        if (existingUser) {
            throw { message: 'Ya existe un usuario con este correo electrónico', code: 409 };
        }
        const hashedPassword = yield bcryptjs_1.default.hash(userData.contrasenia, 5);
        const newUser = userRepository.create(Object.assign(Object.assign({}, userData), { contrasenia: hashedPassword }));
        yield userRepository.save(newUser);
        return { message: 'Usuario creado exitosamente' };
    }
    catch (error) {
        throw error;
    }
});
const authLogin = (email, contrasenia) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userRepository.findOne({ where: { email } });
        if (!user) {
            throw { message: 'Correo electrónico o contraseña incorrectos', code: 401 };
        }
        const passwordMatch = yield bcryptjs_1.default.compare(contrasenia, user.contrasenia);
        if (!passwordMatch) {
            throw { message: 'Correo electrónico o contraseña incorrectos', code: 401 };
        }
        const token = jsonwebtoken_1.default.sign({ userId: user.id, email: user.email, tipo: user.tipo }, process.env.JWT_SECRET, { expiresIn: '72h' });
        user.updatedAt = new Date();
        yield userRepository.save(user);
        return ({
            message: 'Inicio de sesión exitoso',
            refreshToken: token,
            user: {
                id: user.id,
                apellido: user.apellido,
                nombre: user.nombre,
                telefono: user.telefono,
                pais: user.pais,
                tipo: user.tipo,
                email: user.email
            }
        });
    }
    catch (error) {
        throw error;
    }
});
exports.default = {
    auth2FaSetupService,
    auth2FaVerifyService,
    createUser,
    authLogin
};
//# sourceMappingURL=auth.service.js.map