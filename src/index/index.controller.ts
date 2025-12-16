import { Controller, Get } from '@nestjs/common';
import { IndexService } from './index.service';

/**
 * 路由（接收请求） Nestde IoC / DI
 */
@Controller()
export class IndexController {
  constructor(private readonly indexService: IndexService) {}

  @Get()
  getHello(): string {
    return this.indexService.getHello();
  }

  @Get('Hi')
  getHi(): string {
    return 'Hi';
  }
}
