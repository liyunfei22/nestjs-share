import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { HelloModule } from './hello/hello.module';
import { ConfigModule } from '@nestjs/config';
import { LoggerMiddleware } from './logger.middleware';

@Module({
  imports: [
    UserModule,
    HelloModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [
    {
      provide: AppService,
      useClass: AppService,
    },
    {
      provide: 'APP_NAME',
      useValue: 'NestJS',
    },
    {
      provide: 'MESSAGE',
      inject: ['APP_NAME'],
      useFactory: (appName: string) => {
        return `Hello ${appName}`;
      },
    },
    {
      provide: 'CONNECTION',
      useFactory: (appService: AppService) => {
        console.log(appService.getHello());
        return 'connection';
      },
      inject: [AppService],
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).exclude('user/(.*)').forRoutes({
      path: '*',
      method: RequestMethod.GET,
    });
  }
}
