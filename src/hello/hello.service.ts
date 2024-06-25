import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  create() {
    return 'This action adds a new hello';
  }

  findAll() {
    return `This action returns all hello`;
  }
}
