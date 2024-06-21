import { BaseController } from "src/commons/controller.commons";
import { Transaccion } from "../entities/transaccion.entity";
import { BaseService } from "src/commons/service.commons";
import { TransaccionService } from "../services/transaccion.service";
export declare class TransaccionController extends BaseController<Transaccion> {
    private readonly transaccionService;
    constructor(transaccionService: TransaccionService);
    getService(): BaseService<Transaccion>;
    getAll(): Promise<Transaccion[]>;
    countAll(): Promise<Number>;
    delete(id: any): Promise<void>;
}
