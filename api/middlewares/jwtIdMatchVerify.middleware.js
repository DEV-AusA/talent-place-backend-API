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
const jwtIdMatchVerify = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userPayloadData = req.user;
    const { id } = req.params;
    if (userPayloadData.userId !== id)
        throw ({
            message: 'Error en la validacion de datos, ingresa con tu cuenta.',
            code: 401
        });
    return next();
});
exports.default = {
    jwtIdMatchVerify: (0, catchAsync_util_1.default)(jwtIdMatchVerify)
};
//# sourceMappingURL=jwtIdMatchVerify.middleware.js.map