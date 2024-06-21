/* eslint-disable prettier/prettier */
import { BaseController } from "src/commons/controller.commons";
import { Ingreso } from "../entities/ingreso.entity";
import { BaseService } from "src/commons/service.commons";
import { IngresoService } from "../services/ingreso.service";
import { Controller, Get, HttpCode, HttpStatus, Param, Post } from "@nestjs/common";

//ingreso hace uso de los servicios genericos
//se asigna la ruta
@Controller('ingreso')
export class IngresoController extends BaseController<Ingreso>{

    //inyecta el servicio
    constructor(private readonly ingresoService: IngresoService){
        super();
    }

    getService(): BaseService<Ingreso> {
        return this.ingresoService;
    }

    @Get('all')
    async getAll(): Promise<Ingreso[]>{
        return await this.ingresoService.getAll();
    }

    @Get('count')
    async countAll():Promise<Number>{
        return this.getService().count({where:{estado:true}})
    }

    @Post('delete/:id')
    @HttpCode(HttpStatus.OK)
    async delete(@Param('id') id: any) {
        return this.ingresoService.delete({id});
    }
    
}