import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { AppService } from './app.service';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  @Inject(AppService)
  private appService: AppService;
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...');
    console.log(this.appService.getHello());
    console.log('-----------');
    next();
    console.log('-----------');
    console.log('Response...');
  }
}
