import { Usuario } from "src/usuario/entities/usuario.entity";
export declare class Ingreso {
    id: number;
    fecha: Date;
    descripcion: string;
    monto: number;
    categoria: string;
    estado: boolean;
    usuario: Usuario;
}
