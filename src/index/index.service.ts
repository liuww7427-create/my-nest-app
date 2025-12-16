import { Injectable } from '@nestjs/common';
/**
 * 写业务逻辑
 */
@Injectable()
export class IndexService {
  getHello(): string {
    return 'Hello World!';
  }
}
