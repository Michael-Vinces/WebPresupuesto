import { BaseController } from "src/commons/controller.commons";
import { CuentaBancaria } from "../entities/cuenta_bancaria.entity";
import { BaseService } from "src/commons/service.commons";
import { CuentaBancariaService } from "../services/cuenta_bancaria.service";
export declare class CuentaBancariaController extends BaseController<CuentaBancaria> {
    private readonly cuentaBancariaService;
    constructor(cuentaBancariaService: CuentaBancariaService);
    getService(): BaseService<CuentaBancaria>;
    getAll(): Promise<CuentaBancaria[]>;
    countAll(): Promise<Number>;
    delete(id: any): Promise<void>;
}
