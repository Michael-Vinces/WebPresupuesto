/* eslint-disable prettier/prettier */
import { BaseService } from "src/commons/service.commons";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { Transaccion } from "../entities/transaccion.entity";

//Transaccion hace referencia a los servicios genericos 
@Injectable()
export class TransaccionService extends BaseService<Transaccion>{

    //inyecta el repositorio
    constructor(@InjectRepository(Transaccion) private transaccionRepo: Repository<Transaccion>){
        super();
    }


    getRepository(): Repository<Transaccion> {
        return this.transaccionRepo;        
    }

    async getAll():Promise<Transaccion[]>{
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