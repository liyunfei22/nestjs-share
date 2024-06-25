import { Controller, Get, Post } from '@nestjs/common';
import { HelloService } from './hello.service';

@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @Get()
  findAll() {
    return this.helloService.findAll();
  }

  @Post()
  create() {
    return this.helloService.create();
  }
}
