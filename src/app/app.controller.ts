import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * 路由（接收请求） Nestde IoC / DI
 */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('Hi')
  getHi(): string {
    return 'Hi';
  }
}
