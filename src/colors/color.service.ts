import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Color } from './color.entity';

@Injectable()
export class ColorService {
  constructor(
    @InjectRepository(Color)
    private colorRepository: Repository<Color>,
  ) {}

  async findAll(): Promise<Color[]> {
    return await this.colorRepository.find(); // получает все цвета в базе данных
  }

  async findWithPagination(page: number, limit: number): Promise<Color[]> {
    const skip = (page - 1) * limit;
    return await this.colorRepository.find({
      skip,
      take: limit,
    }); // извлекает цвет на основе нумерации страниц
  }

  async findByName(colorName: string): Promise<Color> {
    return await this.colorRepository.findOne({
      where: { c_name: colorName.toLowerCase() }, // поиск цветов по названию
    });
  }

  async createColor(colorData: Partial<Color>): Promise<Color> {
    const newColor = this.colorRepository.create(colorData);
    return await this.colorRepository.save(newColor); // сохраните новый цвет в базе данных
  }
}
