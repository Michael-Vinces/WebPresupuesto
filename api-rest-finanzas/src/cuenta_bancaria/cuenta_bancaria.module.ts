/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CuentaBancaria } from "./entities/cuenta_bancaria.entity";
import { CuentaBancariaService } from "./services/cuenta_bancaria.service";
import { CuentaBancariaController } from "./controllers/cuenta_bancaria.controller";

//definimos atributos del modulo
@Module({
    imports:[TypeOrmModule.forFeature([CuentaBancaria])],
    providers:[CuentaBancariaService],
    controllers:[CuentaBancariaController]
})

export class CuentaBancariaModule{

}