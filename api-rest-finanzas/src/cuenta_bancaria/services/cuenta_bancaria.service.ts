/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { BaseService } from "src/commons/service.commons";
import { CuentaBancaria } from "../entities/cuenta_bancaria.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

//cuenta bancaria hace referencia a los servicios genericos 
@Injectable()
export class CuentaBancariaService extends BaseService<CuentaBancaria>{
    
    

    //inyecta el repositorio
    constructor(@InjectRepository(CuentaBancaria) private cuentaBancariaRepo: Repository<CuentaBancaria>){
        super();
    }


    getRepository(): Repository<CuentaBancaria> {
        return this.cuentaBancariaRepo;
    }

    async getAll():Promise<CuentaBancaria[]>{
        const entities = await this.findAll();
        const query = entities.filter(item => item.estado === true);
        return query;
    }
    
    async delete(id: any) {
        const entity = await this.getRepository().findOne({ where: id });
        if (entity) {
            entity.estado = false; // Establece el campo "estado" en falso
            await this.getRepository().save(entity);
        }
    }
    
}