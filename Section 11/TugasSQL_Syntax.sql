-- CREATE database db_eduwork;

-- use dbEduwork;

CREATE TABLE persons (
 person_id int primary key,
 last_name varchar(255),
 first_name varchar(255),
 address varchar(255),
 city varchar(255)
);

CREATE TABLE users (
 user_id int PRIMARY KEY,
 name varchar(255),
 email varchar(100),
 phone int(15),
 gender varchar(10),
 address varchar(255)
);

INSERT INTO persons
VALUES 
(1, 'Jiyan', 'Nauval', 'Sawangan', 'Depok'),
(2, 'Nadia', 'Shefiana', 'BuahBatu', 'Bandung');

SELECT last_name, first_name
FROM persons;

SELECT first_name FROM persons WHERE city= 'Bandung';

INSERT INTO users
(user_id, name, email, phone, gender, address)
VALUES
(1, 'Ajam', 'ajam@gmail.com', 0813851873, 'Male', 'Bojong Jengkol'),
(2, 'Ajiz', 'ajiz@gmail.com', 0813851333, 'Male', 'Bojong Gede'),
(3, 'Abi', 'abi@gmail.com', 0813851923, 'Female', 'Bojong Kecil'),
(4, 'Abu', 'abu@gmail.com', 0813851981, 'Male', 'Jakarta'),
(5, 'Acu', 'acu@gmail.com', 0813844487, 'Female', 'Depok'),
(6, 'Aniki', 'aniki@gmail.com', 081385873, 'Male', 'Bekasi'),
(7, 'Angel', 'angel@gmail.com', 0813813873, 'Female', 'Cianjur'),
(8, 'Zizi', 'zizi@gmail.com', 081385323, 'Female', 'Lewiliyang'),
(9, 'Naina', 'naina@gmail.com', 081385773, 'Female', 'Banten'),
(10, 'Pribadi', 'pribadi@gmail.com', 0813851125, 'Male', 'Bali'),
(11, 'Badu', 'Badu@gmail.com', 0813851873, 'Male', 'Bojong Jengkol'),
(12, 'Bani', 'Bani@gmail.com', 0813851333, 'Male', 'Bojong Gede'),
(13, 'Beni', 'Beni@gmail.com', 0813851923, 'Female', 'Bojong Kecil'),
(14, 'Boy', 'Boy@gmail.com', 0813851981, 'Male', 'Jakarta'),
(15, 'Abdur', 'Abdur@gmail.com', 0813844487, 'Female', 'Depok'),
(16, 'Abdul', 'Abdul@gmail.com', 081385873, 'Male', 'Bekasi'),
(17, 'Uphuy', 'Uphuy@gmail.com', 0813813873, 'Female', 'Cianjur'),
(18, 'Yiyi', 'Yiyi@gmail.com', 081385323, 'Female', 'Lewiliyang'),
(19, 'Yaya', 'Yaya@gmail.com', 081385773, 'Female', 'Banten'),
(20, 'Yeye', 'Yeye@gmail.com', 0813851125, 'Male', 'Bali'),
(21, 'Nene', 'Nene@gmail.com', 0813851873, 'Male', 'Bojong Jengkol'),
(22, 'Rohim', 'Rohim@gmail.com', 0813851333, 'Male', 'Bojong Gede'),
(23, 'Dion', 'Dion@gmail.com', 0813851923, 'Female', 'Bojong Kecil'),
(24, 'Adi', 'Adi@gmail.com', 0813851981, 'Male', 'Jakarta'),
(25, 'Dodi', 'Dodi@gmail.com', 0813844487, 'Female', 'Depok'),
(26, 'Dedi', 'Dedi@gmail.com', 081385873, 'Male', 'Bekasi'),
(27, 'Irvan', 'Irvan@gmail.com', 0813813873, 'Female', 'Cianjur'),
(28, 'Meta', 'Meta@gmail.com', 081385323, 'Female', 'Lewiliyang'),
(29, 'Mita', 'Mita@gmail.com', 081385773, 'Female', 'Banten'),
(30, 'Joni', 'Joni@gmail.com', 0813851125, 'Male', 'Bali');

SELECT * FROM users;

SELECT name AS n, phone AS p, address AS a
FROM users;

SELECT name AS n, phone AS p, address AS a
FROM users
WHERE address= 'Depok';
