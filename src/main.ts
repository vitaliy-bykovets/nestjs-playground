import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';

const port = process.env.PORT || 8080;
const apiVersion = process.env.API_VERSION;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(`api/${apiVersion}`);
  await app.listen(port);
}
bootstrap();
