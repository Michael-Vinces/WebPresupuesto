/* eslint-disable prettier/prettier */
import { BaseController } from "src/commons/controller.commons";
import { Usuario } from "../entities/usuario.entity";
import { BaseService } from "src/commons/service.commons";
import { UsuarioService } from "../services/usuario.service";
import { Controller, Get, HttpCode, HttpStatus, Param, Post } from "@nestjs/common";

//usuario hace uso de los servicios genericos
//se asigna la ruta
@Controller('usuario')
export class UsuarioController extends BaseController<Usuario>{

    //inyecta el servicio
    constructor(private readonly usuarioService: UsuarioService) {
        super();
    }

    getService(): BaseService<Usuario> {
        return this.usuarioService;
    }

    @Get('all')
    async getAll(): Promise<Usuario[]> {
        return await this.usuarioService.getAll();
    }

    @Get('count')
    async countAll():Promise<Number>{
        return this.getService().count({where:{estado:true}})
    }

    @Post('delete/:id')
    @HttpCode(HttpStatus.OK)
    async delete(@Param('id') id: any) {
        return this.usuarioService.delete({ id });
    }

    @Get('datos-mensuales/:id')
    async getDatosMensuales(@Param('id') id: number) {
        const datosMensuales = await this.usuarioService.getDatosMensuales(id);
        return { data: datosMensuales };
    }

    @Get('cuentas-bancarias/:id')
    async getCuentasBancarias(@Param('id') id: number) {
        const cuentasBancarias = await this.usuarioService.getCuentasBancarias(id);
        return cuentasBancarias;
    }

}