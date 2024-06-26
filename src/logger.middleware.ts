import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { AppService } from './app.service';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  @Inject(AppService)
  private appService: AppService;
  use(req: Request, res: Response, next: NextFunction) {
    console.log('中间件， Request...');
    next();
    console.log('中间件， Response...');
  }
}
