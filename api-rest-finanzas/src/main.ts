/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as bodyParser from 'body-parser';


//Implementamos el puerto 
//const PUERTO = 3000;


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const PUERTO = configService.get('PORT') || 3000;

  app.use(bodyParser.json({ limit: '10mb' }));
  app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

  app.enableCors();

  //instanciamos la el objeto Loger con el nombre de bootstrap, proporcionado por el módulo nestjs
  const logger = new Logger('Bootstrap');

  //instanciamos una ruta global donde cada ruta iniciará de manera obligatoria con /api
  app.setGlobalPrefix('api');

  //Implementacion de objeto de configuracion Swagger 
  const config = new DocumentBuilder()
  .setTitle("REST API Finanzas")
  .setDescription ("API de conexion para finanzas de usuario")
  .setVersion('1.0')
  .build();

  //crear el documento y asignar la ruta
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  //mostramos el puerto para acceder a la api
  await app.listen(PUERTO, ()=>{
    logger.log(`Server running http://localhost:${PUERTO}/api`);
  })
}

bootstrap();