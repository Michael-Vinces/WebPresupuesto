import { BaseController } from "src/commons/controller.commons";
import { Usuario } from "../entities/usuario.entity";
import { BaseService } from "src/commons/service.commons";
import { UsuarioService } from "../services/usuario.service";
export declare class UsuarioController extends BaseController<Usuario> {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    getService(): BaseService<Usuario>;
    getAll(): Promise<Usuario[]>;
    countAll(): Promise<Number>;
    delete(id: any): Promise<void>;
    getDatosMensuales(id: number): Promise<{
        data: {
            totalIngresos: number;
            totalTransacciones: number;
        };
    }>;
    getCuentasBancarias(id: number): Promise<{
        usuario: string;
        cuentasBancarias: Omit<import("../../cuenta_bancaria/entities/cuenta_bancaria.entity").CuentaBancaria, "usuario">[];
    }>;
}
