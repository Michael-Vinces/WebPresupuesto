import { BaseController } from "src/commons/controller.commons";
import { Ingreso } from "../entities/ingreso.entity";
import { BaseService } from "src/commons/service.commons";
import { IngresoService } from "../services/ingreso.service";
export declare class IngresoController extends BaseController<Ingreso> {
    private readonly ingresoService;
    constructor(ingresoService: IngresoService);
    getService(): BaseService<Ingreso>;
    getAll(): Promise<Ingreso[]>;
    countAll(): Promise<Number>;
    delete(id: any): Promise<void>;
}
