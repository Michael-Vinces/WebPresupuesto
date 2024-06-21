/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Ingreso } from "./entities/ingreso.entity";
import { IngresoService } from "./services/ingreso.service";
import { IngresoController } from "./controllers/ingreso.controller";

//definimos atributos del modulo
@Module({
    imports:[TypeOrmModule.forFeature([Ingreso])],
    providers:[IngresoService],
    controllers:[IngresoController]
})

export class IngresoModule{

}