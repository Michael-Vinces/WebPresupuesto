import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; // Importa el módulo de configuración
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/usuario.module';
import { CuentaBancariaModule } from './cuenta_bancaria/cuenta_bancaria.module';
import { IngresoModule } from './ingreso/ingreso.module';
import { TransaccionModule } from './transaccion/transaccion.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // Configura el módulo de configuración
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: process.env.DB_HOST, // Utiliza las variables de entorno
        port: parseInt(process.env.DB_PORT, 10), // Parsea el valor a un número entero
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        autoLoadEntities: true,
      }),
    }),
    UsuarioModule, 
    CuentaBancariaModule,
    IngresoModule,
    TransaccionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
