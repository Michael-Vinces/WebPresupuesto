import { Usuario } from "src/usuario/entities/usuario.entity";
export declare class CuentaBancaria {
    id: number;
    banco: string;
    numero_cuenta: string;
    tipo_cuenta: string;
    estado: boolean;
    usuario: Usuario;
}
