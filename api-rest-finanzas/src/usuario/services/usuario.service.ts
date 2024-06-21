/* eslint-disable prettier/prettier */
import { BaseService } from "src/commons/service.commons";
import { Usuario } from "../entities/usuario.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { Ingreso } from "src/ingreso/entities/ingreso.entity";
import { Transaccion } from "src/transaccion/entities/transaccion.entity";
import { CuentaBancaria } from "src/cuenta_bancaria/entities/cuenta_bancaria.entity";

//usuario hace referencia a los servicios genericos 
@Injectable()
export class UsuarioService extends BaseService<Usuario>{

    //inyecta el repositorio
    constructor(
        @InjectRepository(Usuario)
        private usuarioRepo: Repository<Usuario>,
        @InjectRepository(Ingreso)
        private ingresoRepo: Repository<Ingreso>,
        @InjectRepository(Transaccion)
        private transaccionRepo: Repository<Transaccion>,
        @InjectRepository(CuentaBancaria)
        private cuentaBancariaRepo: Repository<CuentaBancaria>

    ) {
        super();
    }


    getRepository(): Repository<Usuario> {
        return this.usuarioRepo;
    }

    async getAll():Promise<Usuario[]>{
        const entities = await this.findAll();
        const query = entities.filter(item => item.estado === true);
        return query;
    }

    async delete(id: any) {
        const entity = await this.getRepository().findOne({ where: id });
        if (entity) {
            entity.estado = false; // Establece el campo "estado" en falso
            await this.getRepository().save(entity);
        }
    }

    async getDatosMensuales(userId: number): Promise<{ totalIngresos: number; totalTransacciones: number }> {
        const date = new Date();
        const primerDiaDelMes = new Date(date.getFullYear(), date.getMonth(), 1);
        const ultimoDiaDelMes = new Date(date.getFullYear(), date.getMonth() + 1, 0);

        const ingresosYTransacciones = await this.ingresoRepo
            .createQueryBuilder('ingreso')
            .leftJoin('ingreso.usuario', 'usuario')
            .leftJoin('usuario.transacciones', 'transaccion')
            .where('usuario.id = :userId', { userId })
            .andWhere('ingreso.fecha >= :primerDiaDelMes', { primerDiaDelMes })
            .andWhere('ingreso.fecha <= :ultimoDiaDelMes', { ultimoDiaDelMes })
            .andWhere('transaccion.fecha >= :primerDiaDelMes', { primerDiaDelMes })
            .andWhere('transaccion.fecha <= :ultimoDiaDelMes', { ultimoDiaDelMes })
            .addGroupBy('usuario.nombre')
            .select([
                'usuario.nombre as usuario',
                'SUM(ingreso.monto) as totalIngresos',
                'SUM(transaccion.monto) as totalTransacciones'
            ])
            .getRawOne();
        return ingresosYTransacciones;
    }

    async getCuentasBancarias(userId: number): Promise<{ usuario: string, cuentasBancarias: Omit<CuentaBancaria, 'usuario'>[] }> {
        const cuentasBancarias = await this.cuentaBancariaRepo
            .createQueryBuilder('cuentaBancaria')
            .innerJoin('cuentaBancaria.usuario', 'usuario')
            .where('usuario.id = :userId', { userId })
            .select(['usuario.nombre', 'cuentaBancaria.banco', 'cuentaBancaria.numero_cuenta', 'cuentaBancaria.tipo_cuenta'])
            .getMany();

        const usuario = cuentasBancarias.length > 0 ? cuentasBancarias[0].usuario.nombre : '';

        const cuentasBancariasSinUsuario = cuentasBancarias.map(cuentaBancaria => {
            const { usuario, ...cuentaBancariaSinUsuario } = cuentaBancaria;
            return cuentaBancariaSinUsuario;
        });

        return {
            usuario,
            cuentasBancarias: cuentasBancariasSinUsuario,
        };
    }
}


