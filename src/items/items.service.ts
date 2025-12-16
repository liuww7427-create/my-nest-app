import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ItemsService {
  constructor(private prismaService: PrismaService) {}

  async create(title: string, content: string) {
    return await this.prismaService.item.create({
      data: {
        title,
        content,
      },
    });
  }

  async findMany() {
    return await this.prismaService.item.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async remove(id: number) {
    return await this.prismaService.item.delete({
      where: { id },
    });
  }
}
