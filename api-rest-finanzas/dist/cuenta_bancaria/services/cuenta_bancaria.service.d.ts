import { BaseService } from "src/commons/service.commons";
import { CuentaBancaria } from "../entities/cuenta_bancaria.entity";
import { Repository } from "typeorm";
export declare class CuentaBancariaService extends BaseService<CuentaBancaria> {
    private cuentaBancariaRepo;
    constructor(cuentaBancariaRepo: Repository<CuentaBancaria>);
    getRepository(): Repository<CuentaBancaria>;
    getAll(): Promise<CuentaBancaria[]>;
    delete(id: any): Promise<void>;
}
