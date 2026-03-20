CREATE DATABASE ecommdb;
USE ecommdb;
CREATE TABLE categories (
    category_id INT PRIMARY KEY,
    category_name VARCHAR(100)
);
CREATE TABLE products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(100),
    model_year INT,
    list_price DECIMAL(10,2),
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
);
INSERT INTO categories VALUES
(1,'Mountain Bikes'),
(2,'Road Bikes'),
(3,'Electric Bikes');
INSERT INTO products VALUES
(1,'Mountain Bike A',2017,800,1),
(2,'Mountain Bike B',2018,900,1),
(3,'Mountain Bike C',2019,700,1),
(4,'Road Bike A',2018,1200,2),
(5,'Road Bike B',2019,1500,2),
(6,'Electric Bike A',2020,2000,3),
(7,'Electric Bike B',2021,2200,3);