import {
  Body,
  Controller,
  Post,
  Get,
  Redirect,
  Delete,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  constructor(private itemsService: ItemsService) {}

  @Post()
  async create(@Body() body: CreateItemDto) {
    return await this.itemsService.create(body.title, body.content);
  }

  @Get()
  async getMany() {
    return await this.itemsService.findMany();
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.itemsService.remove(id);
  }

  @Get('form')
  @Redirect('/items-form.html', 302)
  formPage() {
    return;
  }
}
