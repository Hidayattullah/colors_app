-- 1. создать базу данных
CREATE DATABASE colors_db;

-- 2. Использование вновь созданной базы данных
\c colors_db;

-- 3. Создание таблицы «v_color»
CREATE TABLE v_color (
    id SERIAL PRIMARY KEY,
    c_name VARCHAR(50) NOT NULL,
    c_hex VARCHAR(7) NOT NULL,
    c_rgb VARCHAR(20) NOT NULL
);

-- 4. Ввод данных цвета
INSERT INTO v_color (c_name, c_hex, c_rgb)
VALUES 
('Red', '#FF0000', 'rgb(255, 0, 0)'),
('Green', '#008000', 'rgb(0, 128, 0)'),
('Blue', '#0000FF', 'rgb(0, 0, 255)'),
('Yellow', '#FFFF00', 'rgb(255, 255, 0)'),
('Cyan', '#00FFFF', 'rgb(0, 255, 255)'),
('Magenta', '#FF00FF', 'rgb(255, 0, 255)'),
('Black', '#000000', 'rgb(0, 0, 0)'),
('White', '#FFFFFF', 'rgb(255, 255, 255)'),
('Orange', '#FFA500', 'rgb(255, 165, 0)'),
('Purple', '#800080', 'rgb(128, 0, 128)');
