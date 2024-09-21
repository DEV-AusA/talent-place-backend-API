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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const ulid_1 = require("ulid");
let Pago = class Pago {
    generateUlid() {
        this.id = (0, ulid_1.ulid)();
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Pago.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "proyecto_id" }),
    __metadata("design:type", String)
], Pago.prototype, "proyectoId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "empresa_id" }),
    __metadata("design:type", String)
], Pago.prototype, "empresaId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "junior_id" }),
    __metadata("design:type", String)
], Pago.prototype, "juniorId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Pago.prototype, "monto", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Pago.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Pago.prototype, "generateUlid", null);
Pago = __decorate([
    (0, typeorm_1.Entity)({
        name: "pagos"
    })
], Pago);
exports.default = Pago;
//# sourceMappingURL=pago.js.map