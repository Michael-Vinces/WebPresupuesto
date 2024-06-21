export interface IIngresos{
    sum: number;
    ingresos: IIngreso[];
}
export interface IViewIncome{ //interface para añadir un ingreso que no requiere añadir id
    id?: number;
    fecha: Date;
    descripcion: string;
    monto: number;
    categoria: string;
    estado?: boolean;
}
export interface IIngreso{ //interface para modificar y eliminar, donde la id si se requiere
    id: number;
    fecha: Date;
    descripcion: string;
    monto: number;
    categoria: string;
    estado?: boolean;
}