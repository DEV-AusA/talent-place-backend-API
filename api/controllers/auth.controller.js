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
const auth_service_1 = __importDefault(require("../services/auth.service"));
const catchAsync_util_1 = __importDefault(require("../utils/catchAsync.util"));
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    const createUser = yield auth_service_1.default.createUser(userData);
    res.status(201).json(createUser);
});
const authLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, contrasenia } = req.body;
    const userLogin = yield auth_service_1.default.authLogin(email, contrasenia);
    res.status(200).json(userLogin);
});
const postAuth2FaSetup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.body;
    const setupQrCode = yield auth_service_1.default.auth2FaSetupService(userId);
    res.status(200).json(setupQrCode);
});
const postAuth2FaVerify = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, token } = req.body;
    const verifyStatus = yield auth_service_1.default.auth2FaVerifyService(userId, token);
    res.status(200).json({ message: "Verificacion realizada con exito", verifyStatus });
});
exports.default = {
    postAuth2FaSetup: (0, catchAsync_util_1.default)(postAuth2FaSetup),
    postAuth2FaVerify: (0, catchAsync_util_1.default)(postAuth2FaVerify),
    postUser: (0, catchAsync_util_1.default)(postUser),
    authLogin: (0, catchAsync_util_1.default)(authLogin)
};
//# sourceMappingURL=auth.controller.js.map