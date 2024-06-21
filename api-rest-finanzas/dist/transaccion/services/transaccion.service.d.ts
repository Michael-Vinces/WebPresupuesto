import { BaseService } from "src/commons/service.commons";
import { Repository } from "typeorm";
import { Transaccion } from "../entities/transaccion.entity";
export declare class TransaccionService extends BaseService<Transaccion> {
    private transaccionRepo;
    constructor(transaccionRepo: Repository<Transaccion>);
    getRepository(): Repository<Transaccion>;
    getAll(): Promise<Transaccion[]>;
    delete(id: any): Promise<void>;
}
