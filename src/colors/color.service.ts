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
    return await this.colorRepository.find(); // Mengambil semua warna
  }

  async findWithPagination(page: number, limit: number): Promise<Color[]> {
    const skip = (page - 1) * limit;
    return await this.colorRepository.find({
      skip,
      take: limit,
    }); // Mengambil warna dengan pagination
  }

  async findByName(colorName: string): Promise<Color> {
    return await this.colorRepository.findOne({
      where: { c_name: colorName.toLowerCase() }, // Mencari warna berdasarkan nama
    });
  }
}
