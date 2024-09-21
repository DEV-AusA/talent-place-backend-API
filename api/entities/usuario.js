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
const typeorm_1 = require("typeorm");
const proyecto_1 = __importDefault(require("./proyecto"));
const aplicacion_1 = __importDefault(require("./aplicacion"));
const pago_1 = __importDefault(require("./pago"));
const comentario_1 = __importDefault(require("./comentario"));
const ulid_1 = require("ulid");
let Usuario = class Usuario {
    generateUlid() {
        this.id = (0, ulid_1.ulid)();
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Usuario.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Usuario.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Usuario.prototype, "apellido", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Usuario.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Usuario.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Usuario.prototype, "pais", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Usuario.prototype, "contrasenia", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: ["junior", "empresa", "admin"],
        default: "junior"
    }),
    __metadata("design:type", String)
], Usuario.prototype, "tipo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "update_at", default: new Date }),
    __metadata("design:type", Date)
], Usuario.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "2fa_enabled", default: false }),
    __metadata("design:type", Boolean)
], Usuario.prototype, "autenticacion2FAHabilitada", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "2fa_secret", nullable: true }),
    __metadata("design:type", String)
], Usuario.prototype, "autenticacion2FASecreto", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => proyecto_1.default, (projecto) => projecto.empresaId),
    __metadata("design:type", Array)
], Usuario.prototype, "projecto", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => aplicacion_1.default, (aplicacion) => aplicacion.juniorId),
    __metadata("design:type", Array)
], Usuario.prototype, "aplicacion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => pago_1.default, (pagos) => pagos.empresaId),
    __metadata("design:type", Array)
], Usuario.prototype, "pagoRealizado", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => pago_1.default, (pagos) => pagos.juniorId),
    __metadata("design:type", Array)
], Usuario.prototype, "comentarioRecibido", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comentario_1.default, (comentarios) => comentarios.usuarioId),
    __metadata("design:type", Array)
], Usuario.prototype, "comentarios", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Usuario.prototype, "generateUlid", null);
Usuario = __decorate([
    (0, typeorm_1.Entity)({
        name: "usuarios"
    })
], Usuario);
exports.default = Usuario;
//# sourceMappingURL=usuario.js.map