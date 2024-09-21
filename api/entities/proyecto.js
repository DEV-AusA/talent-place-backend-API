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
const usuario_1 = __importDefault(require("./usuario"));
const aplicacion_1 = __importDefault(require("./aplicacion"));
const pago_1 = __importDefault(require("./pago"));
const comentario_1 = __importDefault(require("./comentario"));
const ulid_1 = require("ulid");
const categoria_1 = __importDefault(require("./categoria"));
const habilidad_1 = require("./habilidad");
let Proyecto = class Proyecto {
    generateUlid() {
        this.id = (0, ulid_1.ulid)();
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Proyecto.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Proyecto.prototype, "titulo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Proyecto.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Proyecto.prototype, "requisitos", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "empresa_id" }),
    __metadata("design:type", String)
], Proyecto.prototype, "empresaId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "empresa_nombre", nullable: true }),
    __metadata("design:type", String)
], Proyecto.prototype, "empresaNombre", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: ["remoto", "hibrido", "presencial"],
        default: "presencial"
    }),
    __metadata("design:type", String)
], Proyecto.prototype, "modalidad", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: false
    }),
    __metadata("design:type", Boolean)
], Proyecto.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Proyecto.prototype, "fechaCreacion", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => habilidad_1.Habilidad, (habilidad) => habilidad.proyecto, { eager: true }),
    __metadata("design:type", Array)
], Proyecto.prototype, "habilidades", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => categoria_1.default, (categoria) => categoria.proyecto, { eager: true }),
    __metadata("design:type", categoria_1.default)
], Proyecto.prototype, "categoria", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_1.default, (usuario) => usuario.projecto),
    (0, typeorm_1.JoinColumn)({ name: "empresa_id" }),
    __metadata("design:type", usuario_1.default)
], Proyecto.prototype, "empresa", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => aplicacion_1.default, (aplicaciones) => aplicaciones.proyectoId),
    __metadata("design:type", Array)
], Proyecto.prototype, "aplicaciones", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => pago_1.default, (pagos) => pagos.proyectoId),
    __metadata("design:type", Array)
], Proyecto.prototype, "pagos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comentario_1.default, (comentarios) => comentarios.proyectoId),
    __metadata("design:type", Array)
], Proyecto.prototype, "comentarios", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Proyecto.prototype, "generateUlid", null);
Proyecto = __decorate([
    (0, typeorm_1.Entity)({
        name: "proyectos"
    })
], Proyecto);
exports.default = Proyecto;
//# sourceMappingURL=proyecto.js.map