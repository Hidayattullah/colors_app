import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('v_color') 
export class Color {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  c_name: string;

  @Column()
  c_hex: string;

  @Column()
  c_rgb: string;
}
