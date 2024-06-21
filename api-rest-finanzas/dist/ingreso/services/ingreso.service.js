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
exports.IngresoService = void 0;
const service_commons_1 = require("../../commons/service.commons");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const ingreso_entity_1 = require("../entities/ingreso.entity");
let IngresoService = class IngresoService extends service_commons_1.BaseService {
    constructor(ingresoRepo) {
        super();
        this.ingresoRepo = ingresoRepo;
    }
    getRepository() {
        return this.ingresoRepo;
    }
    async getAll() {
        const entities = await this.findAll();
        const query = entities.filter(item => item.estado === true);
        return query;
    }
    async delete(id) {
        const entity = await this.getRepository().findOne({ where: id });
        if (entity) {
            entity.estado = false;
            await this.getRepository().save(entity);
        }
    }
};
IngresoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(ingreso_entity_1.Ingreso)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], IngresoService);
exports.IngresoService = IngresoService;
//# sourceMappingURL=ingreso.service.js.map