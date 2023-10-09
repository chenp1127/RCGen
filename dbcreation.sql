CREATE TABLE users (
  id VARCHAR(255) NOT NULL, 
  email VARCHAR(100) NOT NULL,
  password VARCHAR(32) NOT NULL,
  fullname VARCHAR(32) NOT NULL,
  address VARCHAR(255) ,
  number VARCHAR(32) ,
  PRIMARY KEY (id)
);