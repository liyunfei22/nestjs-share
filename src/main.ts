import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { CustomFilter } from './custom.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     whitelist: true,
  //   }),
  // );
  app.useGlobalFilters(new CustomFilter());
  await app.listen(3000);
}
bootstrap();
