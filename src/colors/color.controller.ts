import { Controller, Get, Param, Query } from '@nestjs/common';
import { ColorService } from './color.service';
import { Color } from './color.entity';

@Controller('colors')
export class ColorController {
  constructor(private readonly colorService: ColorService) {}

  @Get()
  async getAllColors(): Promise<Color[]> {
    return await this.colorService.findAll(); // Mendapatkan semua warna
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
    return await this.colorService.findByName(name); // Mencari warna berdasarkan nama
  }
}
