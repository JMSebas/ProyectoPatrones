import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api/v1")
  app.useGlobalPipes(new ValidationPipe({whitelist: true}));
  app.use(cookieParser());

  const config = new DocumentBuilder()
  .setTitle("Sales Force")
  .setDescription("APIs of Sales Force Project")
  .setVersion("1.0.0")
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("docs", app, document);
  
  await app.listen(3000);
}
bootstrap();
