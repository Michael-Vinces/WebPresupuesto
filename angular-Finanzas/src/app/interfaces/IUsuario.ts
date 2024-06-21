export interface IUsuarios{
    sum: number;
    usuarios: IUsuario[];
}
export interface IUser{ //interface para añadir un usuario que no requiere añadir id
    id?: number;
    nombre: string;
    correo: string;
    contrasena: string;
    estado?: boolean;
}
export interface IUsuario{ //interface para modificar y eliminar, donde la id si se requiere
    id: number;
    nombre: string;
    correo: string;
    contrasena: string;
    estado?: boolean;
}