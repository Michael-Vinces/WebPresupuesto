/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Transaccion } from "./entities/transaccion.entity";
import { TransaccionService } from "./services/transaccion.service";
import { TransaccionController } from "./controllers/transaccion.controller";

//definimos atributos del modulo
@Module({
    imports:[TypeOrmModule.forFeature([Transaccion])],
    providers:[TransaccionService],
    controllers:[TransaccionController]
})

export class TransaccionModule{

}