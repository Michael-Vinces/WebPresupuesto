import { BaseService } from "src/commons/service.commons";
import { Repository } from "typeorm";
import { Ingreso } from "../entities/ingreso.entity";
export declare class IngresoService extends BaseService<Ingreso> {
    private ingresoRepo;
    constructor(ingresoRepo: Repository<Ingreso>);
    getRepository(): Repository<Ingreso>;
    getAll(): Promise<Ingreso[]>;
    delete(id: any): Promise<void>;
}
