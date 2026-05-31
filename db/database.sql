CREATE DATABASE IF NOT EXISTS userdata;

USE userdata;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR(200) NOT NULL
);

INSERT INTO users ( name, email, password ) VALUES
('samaksh', 'samaksh@gmail.com', 'samaksh'),
('sudhanshu', 'sudhanshu@gmail.com','sudhanshu'),
('aditya', 'aditya@gmail.com', 'aditya'),
('bhavil', 'bhavil@gmail.com', 'bhavil'),
('nitin', 'nitin@gmail.com','nitin');

-- new commands added just run on your selected role on mysql. to update.
ALTER TABLE users ADD role ENUM('admin', 'user', 'delivery_agent') NOT NULL DEFAULT 'user';

UPDATE users SET role='admin' WHERE id<3;
UPDATE users SET role='delivery_agent' WHERE id=3;