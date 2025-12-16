import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PrismaModule } from './prisma/prisma.module';
import { IndexModule } from './index/index.module';
import { HealthModule } from './health/health.module';
import { ItemsModule } from './items/items.module';
@Module({
  imports: [
    // 配置模块
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    // 静态资源（表单页）
    ServeStaticModule.forRoot({
      // 使用项目根目录的 public，避免构建后路径错位
      rootPath: join(process.cwd(), 'public'),
    }),
    // 数据库模块
    PrismaModule,
    // 业务模块
    IndexModule,
    HealthModule,
    ItemsModule
  ],
})
export class AppModule {}
