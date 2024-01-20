
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { RootModule } from '@sndl-api';


async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  const globalPrefix = 'api';

  app.setGlobalPrefix(globalPrefix);
  const config = new DocumentBuilder()
    .setTitle('Soundle API')
    .setVersion('1.0')
    .build();

  const port = process.env.PORT || 3000;

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
  Logger.log(
    `🚀 Application is swagger running on: http://localhost:${port}/swagger`
  );
}

bootstrap();
