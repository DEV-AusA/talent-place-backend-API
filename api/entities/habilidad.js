"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Habilidad = void 0;
const typeorm_1 = require("typeorm");
const ulid_1 = require("ulid");
const proyecto_1 = __importDefault(require("./proyecto"));
let Habilidad = class Habilidad {
    generateUlid() {
        this.id = (0, ulid_1.ulid)();
    }
};
exports.Habilidad = Habilidad;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Habilidad.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Habilidad.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => proyecto_1.default, (proyecto) => proyecto.habilidades, {
        cascade: true
    }),
    (0, typeorm_1.JoinTable)({
        name: 'proyectos_habilidades',
    }),
    __metadata("design:type", Array)
], Habilidad.prototype, "proyecto", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Habilidad.prototype, "generateUlid", null);
exports.Habilidad = Habilidad = __decorate([
    (0, typeorm_1.Entity)({
        name: "habilidades"
    })
], Habilidad);
//# sourceMappingURL=habilidad.js.map