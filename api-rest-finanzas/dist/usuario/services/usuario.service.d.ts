import { BaseService } from "src/commons/service.commons";
import { Usuario } from "../entities/usuario.entity";
import { Repository } from "typeorm";
import { Ingreso } from "src/ingreso/entities/ingreso.entity";
import { Transaccion } from "src/transaccion/entities/transaccion.entity";
import { CuentaBancaria } from "src/cuenta_bancaria/entities/cuenta_bancaria.entity";
export declare class UsuarioService extends BaseService<Usuario> {
    private usuarioRepo;
    private ingresoRepo;
    private transaccionRepo;
    private cuentaBancariaRepo;
    constructor(usuarioRepo: Repository<Usuario>, ingresoRepo: Repository<Ingreso>, transaccionRepo: Repository<Transaccion>, cuentaBancariaRepo: Repository<CuentaBancaria>);
    getRepository(): Repository<Usuario>;
    getAll(): Promise<Usuario[]>;
    delete(id: any): Promise<void>;
    getDatosMensuales(userId: number): Promise<{
        totalIngresos: number;
        totalTransacciones: number;
    }>;
    getCuentasBancarias(userId: number): Promise<{
        usuario: string;
        cuentasBancarias: Omit<CuentaBancaria, 'usuario'>[];
    }>;
}
