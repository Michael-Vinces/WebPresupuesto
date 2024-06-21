export interface ITransaccions{
    sum: number;
    transacciones: ITransaccion[];
}
export interface IViewTransactions{ //interface para añadir una trabnsaccion que no requiere añadir id
    id?: number;
    fecha: Date;
    descripcion: string;
    monto: number;
    categoria: string;
    estado?: boolean;
}
export interface ITransaccion{ //interface para modificar y eliminar, donde la id si se requiere
    id: number;
    fecha: Date;
    descripcion: string;
    monto: number;
    categoria: string;
    estado?: boolean;
}