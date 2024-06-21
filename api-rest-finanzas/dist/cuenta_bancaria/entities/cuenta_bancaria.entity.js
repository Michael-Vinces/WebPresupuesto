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
exports.CuentaBancaria = void 0;
const usuario_entity_1 = require("../../usuario/entities/usuario.entity");
const typeorm_1 = require("typeorm");
let CuentaBancaria = class CuentaBancaria {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CuentaBancaria.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CuentaBancaria.prototype, "banco", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CuentaBancaria.prototype, "numero_cuenta", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CuentaBancaria.prototype, "tipo_cuenta", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], CuentaBancaria.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.Usuario, usuario => usuario.cuentasBancarias),
    (0, typeorm_1.JoinColumn)({ name: "usuario_id" }),
    __metadata("design:type", usuario_entity_1.Usuario)
], CuentaBancaria.prototype, "usuario", void 0);
CuentaBancaria = __decorate([
    (0, typeorm_1.Entity)()
], CuentaBancaria);
exports.CuentaBancaria = CuentaBancaria;
//# sourceMappingURL=cuenta_bancaria.entity.js.map