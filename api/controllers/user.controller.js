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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = __importDefault(require("../services/user.service"));
const catchAsync_util_1 = __importDefault(require("../utils/catchAsync.util"));
const getUserProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const userProfile = yield user_service_1.default.getUserProfileByIdService(id);
    res.status(200).json(userProfile);
});
const editUserData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const updateData = __rest(req.body, []);
    const updatedUser = yield user_service_1.default.editUserProfileService(id, updateData);
    res.status(200).json(updatedUser);
});
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_service_1.default.getAllUsersService();
    res.status(200).json(users);
});
const getAllUserHabilities = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const habilities = yield user_service_1.default.getAllUsersHabilitiesService();
    res.status(200).json(habilities);
});
exports.default = {
    getUserProfile: (0, catchAsync_util_1.default)(getUserProfile),
    editUserData: (0, catchAsync_util_1.default)(editUserData),
    getAllUsers: (0, catchAsync_util_1.default)(getAllUsers),
    getAllUserHabilities: (0, catchAsync_util_1.default)(getAllUserHabilities),
};
//# sourceMappingURL=user.controller.js.map