"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngresoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ingreso_entity_1 = require("./entities/ingreso.entity");
const ingreso_service_1 = require("./services/ingreso.service");
const ingreso_controller_1 = require("./controllers/ingreso.controller");
let IngresoModule = class IngresoModule {
};
IngresoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([ingreso_entity_1.Ingreso])],
        providers: [ingreso_service_1.IngresoService],
        controllers: [ingreso_controller_1.IngresoController]
    })
], IngresoModule);
exports.IngresoModule = IngresoModule;
//# sourceMappingURL=ingreso.module.js.map