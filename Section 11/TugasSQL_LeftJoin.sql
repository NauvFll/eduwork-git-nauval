-- CREATE DATABASE EduShop;

-- use EduShop;

CREATE TABLE users (
	id int NOT NULL AUTO_INCREMENT,
    email varchar(255) NOT NULL,
    name varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    address varchar(255),
    role varchar(255),
    status varchar(255),
    created_at timestamp,
    updated_at timestamp,
    PRIMARY KEY (id)
);
SELECT * FROM users;

INSERT INTO users
(email, name, password, address, role, status)
VALUES
('ajam@gmail.com', 'Ajam', 'pajam', 'Bojong Jengkol', 'admin', 'active'),
('ajiz@gmail.com', 'Ajiz', 'pajiz', 'Bojong Gede', 'admin', 'active'),
('naina@gmail.com', 'Naina', 'pnaina', 'Bojong Kecil', 'admin', 'active'),
('joni@gmail.com', 'Joni', 'pjoni', 'Jakarta', 'admin', 'active'),
('sofi@gmail.com', 'Sofi', 'psofi', 'Depok', 'admin', 'deactive');

CREATE TABLE products (
	id int NOT NULL AUTO_INCREMENT,
    category_id int,
    user_id int,
    code varchar(255) NOT NULL,
    name varchar(255) NOT NULL,
    slug varchar(255),
    description longtext,
    photo varchar(255),
    qty double,
    unit varchar(255),
    price double,
    status varchar(255),
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (category_id) REFERENCES categories(id)
);
SELECT * FROM products;

INSERT INTO products
(category_id, user_id, code, name, slug, description, photo, qty, unit, price, status)
VALUES
(1, 1, 'AP01', 'Apple', 'Slug Apple', 'Sweet Apple', '<img src="apple"', 25, 'New', 50000, 'Ready'),
(2, 2, 'RB01', 'Rabbit', 'Slug Rabbit', 'Sweet Rabbit', '<img src="rabbit"', 55, 'Chill', 20000, 'Ready'),
(3, 3, 'SU01', 'Supra', 'Slug Supra', 'Sweet Supra', '<img src="supra"', 525, 'New', 5550000, 'Ready'),
(4, 4, 'GB01', 'Good Habbit', 'Slug Habbit', 'Sweet Habbit', '<img src="habbit"', 15, 'New', 35000, 'Ready'),
(5, 5, 'GS01', 'Gibson', 'Slug Gibson', 'Sweet Gibson', '<img src="gibson"', 35, 'New', 1150000, 'Ready');

CREATE TABLE categories (
	id int NOT NULL AUTO_INCREMENT,
    user_id int,
    code varchar(255) NOT NULL,
    name varchar(255) NOT NULL,
    slug varchar(255),
    descriptions text,
    status varchar(255),
    photo varchar(255),
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);
SELECT * FROM categories;

INSERT INTO categories
(user_id, code, name, slug, descriptions, status, photo)
VALUES
(1, 'F001', 'FRUITS', 'Slug Fruit', 'DESCFruit', 'FRESH', '<img src="fruit"'),
(2, 'A001', 'ANIMALS', 'Slug Animal', 'DESCAnimal', 'FRESH', '<img src="animal"'),
(3, 'C001', 'CARS', 'Slug Car', 'DESCCar', 'NEW', '<img src="car"'),
(4, 'B001', 'BOOKS', 'Slug Book', 'DESCBook', 'NEW', '<img src="book"'),
(5, 'G001', 'GUITAR', 'Slug Guitar', 'DESCGuitar', 'NEW', '<img src="guitar"');

-- Buatlah query menggunakan LEFT JOIN
SELECT users.name, categories.name
FROM users 
LEFT JOIN categories ON users.id = categories.user_id
ORDER BY users.name;

SELECT products.name, categories.name
FROM products 
LEFT JOIN categories ON products.category_id = categories.id
ORDER BY products.name