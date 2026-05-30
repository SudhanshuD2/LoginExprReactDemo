CREATE DATABASE userdata;

USE userdata;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    password VARCHAR(200) NOT NULL,
);

INSERT INTO users ( name, email, password ) VALUES
('samaksh', 'samaksh@gmail.com', 'samaksh'),
('sudhanshu', 'sudhanshu@gmail.com','sudhanshu'),
('aditya', 'aditya@gmail.com', 'aditya'),
('bhavil', 'bhavil@gmail.com', 'bhavil'),
('nitin', 'nitin@gmail.com','nitin');


