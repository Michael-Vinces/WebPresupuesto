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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioService = void 0;
const service_commons_1 = require("../../commons/service.commons");
const usuario_entity_1 = require("../entities/usuario.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const ingreso_entity_1 = require("../../ingreso/entities/ingreso.entity");
const transaccion_entity_1 = require("../../transaccion/entities/transaccion.entity");
const cuenta_bancaria_entity_1 = require("../../cuenta_bancaria/entities/cuenta_bancaria.entity");
let UsuarioService = class UsuarioService extends service_commons_1.BaseService {
    constructor(usuarioRepo, ingresoRepo, transaccionRepo, cuentaBancariaRepo) {
        super();
        this.usuarioRepo = usuarioRepo;
        this.ingresoRepo = ingresoRepo;
        this.transaccionRepo = transaccionRepo;
        this.cuentaBancariaRepo = cuentaBancariaRepo;
    }
    getRepository() {
        return this.usuarioRepo;
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
    async getDatosMensuales(userId) {
        const date = new Date();
        const primerDiaDelMes = new Date(date.getFullYear(), date.getMonth(), 1);
        const ultimoDiaDelMes = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        const ingresosYTransacciones = await this.ingresoRepo
            .createQueryBuilder('ingreso')
            .leftJoin('ingreso.usuario', 'usuario')
            .leftJoin('usuario.transacciones', 'transaccion')
            .where('usuario.id = :userId', { userId })
            .andWhere('ingreso.fecha >= :primerDiaDelMes', { primerDiaDelMes })
            .andWhere('ingreso.fecha <= :ultimoDiaDelMes', { ultimoDiaDelMes })
            .andWhere('transaccion.fecha >= :primerDiaDelMes', { primerDiaDelMes })
            .andWhere('transaccion.fecha <= :ultimoDiaDelMes', { ultimoDiaDelMes })
            .addGroupBy('usuario.nombre')
            .select([
            'usuario.nombre as usuario',
            'SUM(ingreso.monto) as totalIngresos',
            'SUM(transaccion.monto) as totalTransacciones'
        ])
            .getRawOne();
        return ingresosYTransacciones;
    }
    async getCuentasBancarias(userId) {
        const cuentasBancarias = await this.cuentaBancariaRepo
            .createQueryBuilder('cuentaBancaria')
            .innerJoin('cuentaBancaria.usuario', 'usuario')
            .where('usuario.id = :userId', { userId })
            .select(['usuario.nombre', 'cuentaBancaria.banco', 'cuentaBancaria.numero_cuenta', 'cuentaBancaria.tipo_cuenta'])
            .getMany();
        const usuario = cuentasBancarias.length > 0 ? cuentasBancarias[0].usuario.nombre : '';
        const cuentasBancariasSinUsuario = cuentasBancarias.map(cuentaBancaria => {
            const { usuario } = cuentaBancaria, cuentaBancariaSinUsuario = __rest(cuentaBancaria, ["usuario"]);
            return cuentaBancariaSinUsuario;
        });
        return {
            usuario,
            cuentasBancarias: cuentasBancariasSinUsuario,
        };
    }
};
UsuarioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(usuario_entity_1.Usuario)),
    __param(1, (0, typeorm_2.InjectRepository)(ingreso_entity_1.Ingreso)),
    __param(2, (0, typeorm_2.InjectRepository)(transaccion_entity_1.Transaccion)),
    __param(3, (0, typeorm_2.InjectRepository)(cuenta_bancaria_entity_1.CuentaBancaria)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository])
], UsuarioService);
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=usuario.service.js.map