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
exports.Transaccion = void 0;
const usuario_entity_1 = require("../../usuario/entities/usuario.entity");
const typeorm_1 = require("typeorm");
let Transaccion = class Transaccion {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Transaccion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], Transaccion.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Transaccion.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Transaccion.prototype, "monto", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Transaccion.prototype, "categoria", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Transaccion.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.Usuario, usuario => usuario.transacciones),
    (0, typeorm_1.JoinColumn)({ name: "usuario_id" }),
    __metadata("design:type", usuario_entity_1.Usuario)
], Transaccion.prototype, "usuario", void 0);
Transaccion = __decorate([
    (0, typeorm_1.Entity)()
], Transaccion);
exports.Transaccion = Transaccion;
//# sourceMappingURL=transaccion.entity.js.map