/* eslint-disable prettier/prettier */
//importacion de typeorm
import { CuentaBancaria } from "src/cuenta_bancaria/entities/cuenta_bancaria.entity";
import { Ingreso } from "src/ingreso/entities/ingreso.entity";
import { Transaccion } from "src/transaccion/entities/transaccion.entity";
import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm"

//se define la entidad usuario
@Entity()
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    correo: string;

    @Column()
    contrasena: string;

    @Column()
    estado: boolean;


    @OneToMany(() => CuentaBancaria, cuentasBancarias => cuentasBancarias.usuario)
    cuentasBancarias: CuentaBancaria[];

    @OneToMany(() => Ingreso, ingreso => ingreso.usuario)
    ingresos: Ingreso[];

    @OneToMany(() => Transaccion, transaccion => transaccion.usuario)
    transacciones: Transaccion[];


}