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
const typeorm_config_1 = require("../config/typeorm.config");
const categoria_1 = __importDefault(require("../entities/categoria"));
const categoryRepository = typeorm_config_1.AppDataSource.getRepository(categoria_1.default);
const postNewCategory = (nameCategory) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield findCategoryByName(nameCategory);
    try {
        if (category) {
            return category;
        }
        else {
            const newCategory = yield categoryRepository.create({
                nombre: nameCategory,
            });
            const newCategorySaved = yield categoryRepository.save(newCategory);
            return newCategorySaved;
        }
    }
    catch (error) {
        throw error;
    }
});
const findCategoryByName = (name) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = yield categoryRepository.findOne({
            where: {
                nombre: name.toLocaleLowerCase()
            }
        });
        return category;
    }
    catch (error) {
        throw error;
    }
});
const getAllCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield categoryRepository.find();
        return categories;
    }
    catch (error) {
        throw error;
    }
});
exports.default = {
    postNewCategory,
    getAllCategories
};
//# sourceMappingURL=category.service.js.map