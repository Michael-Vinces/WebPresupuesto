/* eslint-disable prettier/prettier */
import { BaseService } from "src/commons/service.commons";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { Ingreso } from "../entities/ingreso.entity";

//ingreso hace referencia a los servicios genericos 
@Injectable()
export class IngresoService extends BaseService<Ingreso>{

    //inyecta el repositorio
    constructor(@InjectRepository(Ingreso) private ingresoRepo: Repository<Ingreso>){
        super();
    }


    getRepository(): Repository<Ingreso> {
        return this.ingresoRepo;
    }

    async getAll():Promise<Ingreso[]>{
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