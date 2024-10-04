import { Controller, Get, Param, Query, Post, Body } from '@nestjs/common';
import { ColorService } from './color.service';
import { Color } from './color.entity';

@Controller('colors')
export class ColorController {
  constructor(private readonly colorService: ColorService) {}

  @Get()
  async getAllColors(): Promise<Color[]> {
    return await this.colorService.findAll(); // получает все цвета в базе данных
  }

  @Get('page')
  async getColorsWithPagination(
    @Query('page') page: number,
    @Query('limit') limit: number,
  ): Promise<Color[]> {
    return await this.colorService.findWithPagination(page, limit); // Pagination
  }

  @Get(':name')
  async getColorByName(@Param('name') name: string): Promise<Color> {
    return await this.colorService.findByName(name); // поиск цветов по названию
  }

  // Endpoint untuk membuat warna baru
  @Post()
  async createColor(@Body() colorData: Partial<Color>): Promise<Color> {
    return await this.colorService.createColor(colorData); // добавить новые цвета
  }
}
