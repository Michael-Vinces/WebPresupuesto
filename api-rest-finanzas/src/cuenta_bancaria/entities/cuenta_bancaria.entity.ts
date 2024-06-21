/* eslint-disable prettier/prettier */
//importacion de typeorm
import { Usuario } from "src/usuario/entities/usuario.entity";
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm"

//se define la entidad cuenta bancaria
@Entity()
export class CuentaBancaria {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    banco: string;

    @Column()
    numero_cuenta: string;

    @Column()
    tipo_cuenta: string;

    @Column()
    estado: boolean;

    @ManyToOne(() => Usuario, usuario => usuario.cuentasBancarias)
    @JoinColumn({name: "usuario_id"})
    usuario: Usuario;
}