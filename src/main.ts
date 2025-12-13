import { NestFactory } from '@nestjs/core';
import { AppIndexModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppIndexModule);

  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT ?? 3003);
}
bootstrap();
