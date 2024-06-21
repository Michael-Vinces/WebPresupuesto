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
exports.TransaccionController = void 0;
const controller_commons_1 = require("../../commons/controller.commons");
const transaccion_service_1 = require("../services/transaccion.service");
const common_1 = require("@nestjs/common");
let TransaccionController = class TransaccionController extends controller_commons_1.BaseController {
    constructor(transaccionService) {
        super();
        this.transaccionService = transaccionService;
    }
    getService() {
        return this.transaccionService;
    }
    async getAll() {
        return await this.transaccionService.getAll();
    }
    async countAll() {
        return this.getService().count({ where: { estado: true } });
    }
    async delete(id) {
        return this.transaccionService.delete({ id });
    }
};
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TransaccionController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('count'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TransaccionController.prototype, "countAll", null);
__decorate([
    (0, common_1.Post)('delete/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TransaccionController.prototype, "delete", null);
TransaccionController = __decorate([
    (0, common_1.Controller)('transaccion'),
    __metadata("design:paramtypes", [transaccion_service_1.TransaccionService])
], TransaccionController);
exports.TransaccionController = TransaccionController;
//# sourceMappingURL=transaccion.controller.js.map