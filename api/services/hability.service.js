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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_config_1 = require("../config/typeorm.config");
const habilidad_1 = require("../entities/habilidad");
const habilityRepository = typeorm_config_1.AppDataSource.getRepository(habilidad_1.Habilidad);
const postNewHability = (habilities) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, habilities_1, habilities_1_1;
    var _b, e_1, _c, _d;
    let habilitiesList = [];
    try {
        try {
            for (_a = true, habilities_1 = __asyncValues(habilities); habilities_1_1 = yield habilities_1.next(), _b = habilities_1_1.done, !_b; _a = true) {
                _d = habilities_1_1.value;
                _a = false;
                const hability = _d;
                const habilityFinded = yield findHabilityByName(hability.toLocaleLowerCase());
                if (!habilityFinded) {
                    const newHability = yield habilityRepository.create({ nombre: hability });
                    const newHabilityCreated = yield habilityRepository.save(newHability);
                    habilitiesList.push(newHabilityCreated);
                }
                else {
                    habilitiesList.push(habilityFinded);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (!_a && !_b && (_c = habilities_1.return)) yield _c.call(habilities_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return habilitiesList;
    }
    catch (error) {
        throw error;
    }
});
const findHabilityByName = (name) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hability = yield habilityRepository.findOne({
            where: {
                nombre: name.toLocaleLowerCase()
            }
        });
        return hability;
    }
    catch (error) {
        throw error;
    }
});
const getAllHabilities = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const habilities = yield habilityRepository.find();
        return habilities;
    }
    catch (error) {
        throw error;
    }
});
exports.default = {
    postNewHability,
    getAllHabilities
};
//# sourceMappingURL=hability.service.js.map