CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT, 
  email VARCHAR(100) NOT NULL,
  password VARCHAR(32) NOT NULL,
  fullname VARCHAR(32) NOT NULL,
  address VARCHAR(255) DEFAULT NULL,
  number VARCHAR(32) DEFAULT NULL,
  PRIMARY KEY (id)
);