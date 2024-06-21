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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CuentaBancariaController = void 0;
const controller_commons_1 = require("../../commons/controller.commons");
const cuenta_bancaria_service_1 = require("../services/cuenta_bancaria.service");
const common_1 = require("@nestjs/common");
let CuentaBancariaController = class CuentaBancariaController extends controller_commons_1.BaseController {
    constructor(cuentaBancariaService) {
        super();
        this.cuentaBancariaService = cuentaBancariaService;
    }
    getService() {
        return this.cuentaBancariaService;
    }
    async getAll() {
        return await this.cuentaBancariaService.getAll();
    }
    async countAll() {
        return this.getService().count({ where: { estado: true } });
    }
    async delete(id) {
        return this.cuentaBancariaService.delete({ id });
    }
};
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CuentaBancariaController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('count'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CuentaBancariaController.prototype, "countAll", null);
__decorate([
    (0, common_1.Post)('delete/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CuentaBancariaController.prototype, "delete", null);
CuentaBancariaController = __decorate([
    (0, common_1.Controller)('cuenta_bancaria'),
    __metadata("design:paramtypes", [cuenta_bancaria_service_1.CuentaBancariaService])
], CuentaBancariaController);
exports.CuentaBancariaController = CuentaBancariaController;
//# sourceMappingURL=cuenta_bancaria.controller.js.map