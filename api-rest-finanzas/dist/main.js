"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const bodyParser = require("body-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    const PUERTO = configService.get('PORT') || 3000;
    app.use(bodyParser.json({ limit: '10mb' }));
    app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
    app.enableCors();
    const logger = new common_1.Logger('Bootstrap');
    app.setGlobalPrefix('api');
    const config = new swagger_1.DocumentBuilder()
        .setTitle("REST API Finanzas")
        .setDescription("API de conexion para finanzas de usuario")
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(PUERTO, () => {
        logger.log(`Server running http://localhost:${PUERTO}/api`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map