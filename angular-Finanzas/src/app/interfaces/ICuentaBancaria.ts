export interface ICuentaBancarias{
    sum: number;
    cuentasBancarias: ICuentaBancaria[];
}
export interface IBankAccount{ //interface para añadir una cuenta que no requiere añadir id
    id?: number;
    banco: string;
    numero_cuenta: string;
    tipo_cuenta: string;
    estado?: boolean;
}
export interface ICuentaBancaria{ //interface para modificar y eliminar, donde la id si se requiere
    id: number;
    banco: string;
    numero_cuenta: string;
    tipo_cuenta: string;
    estado?: boolean;
}