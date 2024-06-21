/* eslint-disable prettier/prettier */
import { BaseController } from "src/commons/controller.commons";
import { Transaccion } from "../entities/transaccion.entity";
import { BaseService } from "src/commons/service.commons";
import { TransaccionService } from "../services/transaccion.service";
import { Controller, Get, HttpCode, HttpStatus, Param, Post } from "@nestjs/common";

//Transaccion hace uso de los servicios genericos
//se asigna la ruta
@Controller('transaccion')
export class TransaccionController extends BaseController<Transaccion>{



    
    //inyecta el servicio
    constructor(private readonly transaccionService: TransaccionService){
        super();
    }

    getService(): BaseService<Transaccion> {
        return this.transaccionService;
    }

    @Get('all')
    async getAll(): Promise<Transaccion[]>{
        return await this.transaccionService.getAll();
    }

    @Get('count')
    async countAll():Promise<Number>{
        return this.getService().count({where:{estado:true}})
    }

    @Post('delete/:id')
    @HttpCode(HttpStatus.OK)
    async delete(@Param('id') id: any) {
        return this.transaccionService.delete({id});
    }
    
}