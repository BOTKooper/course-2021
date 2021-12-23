import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import express, { Express } from 'express';
import { config } from 'node-config-ts';
import { AppModule } from './modules/app.module';

const bootstrap = async (): Promise<void> => {
  const expressApp: Express = express();

  const app: INestApplication = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));

  await app.listen(config.application.port, () => {
    console.log('App is listening');
  });
};

bootstrap();
