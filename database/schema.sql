CREATE DATABASE mess_food;

USE mess_food;

-- Users Table
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  mobile VARCHAR(15),
  enrollment_no VARCHAR(50) UNIQUE,
  faculty_id VARCHAR(50),
  mess_id VARCHAR(50),
  course VARCHAR(100),
  password VARCHAR(100) -- hashed for security
);

-- Orders Table
CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  food_items TEXT,
  order_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Admins Table
CREATE TABLE admins (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) UNIQUE,
  password VARCHAR(100)
);

-- Insert Default Admin
INSERT INTO admins (username, password) VALUES ("admin", "admin123");
