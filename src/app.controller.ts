import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  @Inject('APP_NAME')
  private readonly appName: string;

  constructor(
    private readonly appService: AppService,
    @Inject('MESSAGE') private readonly message: string,
  ) {}

  @Get('hello')
  hello(): string {
    return 'hello';
  }

  @Get()
  getHello(): string {
    console.log('appName', this.appName);
    console.log('message', this.message);
    return this.appService.getHello();
  }
}
