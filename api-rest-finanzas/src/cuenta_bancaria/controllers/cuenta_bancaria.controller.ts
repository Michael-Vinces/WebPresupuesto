/* eslint-disable prettier/prettier */
import { BaseController } from "src/commons/controller.commons";
import { CuentaBancaria } from "../entities/cuenta_bancaria.entity";
import { BaseService } from "src/commons/service.commons";
import { CuentaBancariaService } from "../services/cuenta_bancaria.service";
import { Controller, Get, HttpCode, HttpStatus, Param, Post } from "@nestjs/common";
//cuenta bancaria hace uso de los servicios genericos
//se asigna la ruta
@Controller('cuenta_bancaria')
export class CuentaBancariaController extends BaseController<CuentaBancaria>{

    //inyecta el servicio
    constructor(private readonly cuentaBancariaService: CuentaBancariaService){
        super();
    }

    getService(): BaseService<CuentaBancaria> {
        return this.cuentaBancariaService;
    }

    @Get('all')
    async getAll(): Promise<CuentaBancaria[]>{
        return await this.cuentaBancariaService.getAll();
    }

    @Get('count')
    async countAll():Promise<Number>{
        return this.getService().count({where:{estado:true}})
    }

    @Post('delete/:id')
    @HttpCode(HttpStatus.OK)
    async delete(@Param('id') id: any) {
        return this.cuentaBancariaService.delete({id});
    }
    
}