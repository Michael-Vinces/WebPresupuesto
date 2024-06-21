/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Usuario } from "./entities/usuario.entity";
import { UsuarioService } from "./services/usuario.service";
import { UsuarioController } from "./controllers/usuario.controller";
import { Ingreso } from "src/ingreso/entities/ingreso.entity";
import { Transaccion } from "src/transaccion/entities/transaccion.entity";
import { CuentaBancaria } from "src/cuenta_bancaria/entities/cuenta_bancaria.entity";

//definimos atributos del modulo
@Module({
    imports:[TypeOrmModule.forFeature([Usuario, Ingreso, Transaccion, CuentaBancaria])],
    providers:[UsuarioService],
    controllers:[UsuarioController]
})

export class UsuarioModule{

}