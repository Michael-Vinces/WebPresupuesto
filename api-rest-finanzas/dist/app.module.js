"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const usuario_module_1 = require("./usuario/usuario.module");
const cuenta_bancaria_module_1 = require("./cuenta_bancaria/cuenta_bancaria.module");
const ingreso_module_1 = require("./ingreso/ingreso.module");
const transaccion_module_1 = require("./transaccion/transaccion.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: () => ({
                    type: 'postgres',
                    host: process.env.DB_HOST,
                    port: parseInt(process.env.DB_PORT, 10),
                    username: process.env.DB_USERNAME,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_NAME,
                    autoLoadEntities: true,
                }),
            }),
            usuario_module_1.UsuarioModule,
            cuenta_bancaria_module_1.CuentaBancariaModule,
            ingreso_module_1.IngresoModule,
            transaccion_module_1.TransaccionModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map