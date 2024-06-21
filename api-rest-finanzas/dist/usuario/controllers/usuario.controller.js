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
exports.UsuarioController = void 0;
const controller_commons_1 = require("../../commons/controller.commons");
const usuario_service_1 = require("../services/usuario.service");
const common_1 = require("@nestjs/common");
let UsuarioController = class UsuarioController extends controller_commons_1.BaseController {
    constructor(usuarioService) {
        super();
        this.usuarioService = usuarioService;
    }
    getService() {
        return this.usuarioService;
    }
    async getAll() {
        return await this.usuarioService.getAll();
    }
    async countAll() {
        return this.getService().count({ where: { estado: true } });
    }
    async delete(id) {
        return this.usuarioService.delete({ id });
    }
    async getDatosMensuales(id) {
        const datosMensuales = await this.usuarioService.getDatosMensuales(id);
        return { data: datosMensuales };
    }
    async getCuentasBancarias(id) {
        const cuentasBancarias = await this.usuarioService.getCuentasBancarias(id);
        return cuentasBancarias;
    }
};
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('count'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "countAll", null);
__decorate([
    (0, common_1.Post)('delete/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)('datos-mensuales/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "getDatosMensuales", null);
__decorate([
    (0, common_1.Get)('cuentas-bancarias/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "getCuentasBancarias", null);
UsuarioController = __decorate([
    (0, common_1.Controller)('usuario'),
    __metadata("design:paramtypes", [usuario_service_1.UsuarioService])
], UsuarioController);
exports.UsuarioController = UsuarioController;
//# sourceMappingURL=usuario.controller.js.map