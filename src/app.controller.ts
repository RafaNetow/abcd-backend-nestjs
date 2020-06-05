import { Get, Delete, Post, Controller } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  root(): string {
    return 'Hello World!';
  }
  @Delete()
  root2(): string {
    return 'Hello World!';
  }
  @Post()
  root3(): string {
    return 'Hello World!';
  }
  @Get()
  root4(): string {
    return 'Hello World!';
  }
  @Get()
  root5(): string {
    return 'Hello World!';
  }
}