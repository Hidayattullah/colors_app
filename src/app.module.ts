import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config'; // Import ConfigModule dan ConfigService
import { ColorModule } from './colors/color.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Modul konfigurasi ini akan tersedia di seluruh aplikasi
      envFilePath: '.env', // Tentukan lokasi file .env
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get<string>('DATABASE_URL'), // Mengambil DATABASE_URL dari file .env
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true, // Hanya untuk dev, matikan di production
      }),
    }),
    ColorModule,
  ],
})
export class AppModule {}
