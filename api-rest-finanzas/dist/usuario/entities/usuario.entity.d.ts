import { CuentaBancaria } from "src/cuenta_bancaria/entities/cuenta_bancaria.entity";
import { Ingreso } from "src/ingreso/entities/ingreso.entity";
import { Transaccion } from "src/transaccion/entities/transaccion.entity";
export declare class Usuario {
    id: number;
    nombre: string;
    correo: string;
    contrasena: string;
    estado: boolean;
    cuentasBancarias: CuentaBancaria[];
    ingresos: Ingreso[];
    transacciones: Transaccion[];
}
