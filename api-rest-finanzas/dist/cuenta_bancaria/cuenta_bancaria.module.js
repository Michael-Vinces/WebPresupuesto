"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CuentaBancariaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cuenta_bancaria_entity_1 = require("./entities/cuenta_bancaria.entity");
const cuenta_bancaria_service_1 = require("./services/cuenta_bancaria.service");
const cuenta_bancaria_controller_1 = require("./controllers/cuenta_bancaria.controller");
let CuentaBancariaModule = class CuentaBancariaModule {
};
CuentaBancariaModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([cuenta_bancaria_entity_1.CuentaBancaria])],
        providers: [cuenta_bancaria_service_1.CuentaBancariaService],
        controllers: [cuenta_bancaria_controller_1.CuentaBancariaController]
    })
], CuentaBancariaModule);
exports.CuentaBancariaModule = CuentaBancariaModule;
//# sourceMappingURL=cuenta_bancaria.module.js.map