import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,          // quita propiedades no declaradas en el DTO
    forbidNonWhitelisted: true, // devuelve error si llegan campos inesperados
    transform: true // transforma el objeto a la clase del DTO
  }));
  app.enableCors();
  await app.listen(process.env.PORT || 3001);
}
bootstrap();
