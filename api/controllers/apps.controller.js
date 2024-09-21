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
const apps_service_1 = __importDefault(require("../services/apps.service"));
const catchAsync_util_1 = __importDefault(require("../utils/catchAsync.util"));
const getAllApplicationsUserValidate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.id;
    const applications = yield apps_service_1.default.getApplicationsUser(userId);
    res.status(200).json(applications);
});
const postApplyToProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.id;
    const { proyectoId } = req.body;
    const sendApplication = yield apps_service_1.default.postApplyUserToProject(userId, proyectoId);
    res.status(200).send(sendApplication);
});
exports.default = {
    getAllApplicationsUserValidate: (0, catchAsync_util_1.default)(getAllApplicationsUserValidate),
    postApplyToProject: (0, catchAsync_util_1.default)(postApplyToProject)
};
//# sourceMappingURL=apps.controller.js.map