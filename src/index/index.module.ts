import { Module } from '@nestjs/common';
import { IndexController } from './index.controller';
import { IndexService } from './index.service';
/**
 * 把一组功能打包
 */
@Module({
  imports: [],
  controllers: [IndexController],
  providers: [IndexService],
})
export class IndexModule {}
