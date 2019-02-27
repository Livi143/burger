-- Create the burgers_db.
-- Switch to or use the burgers_db.
-- Create a burgers table with these fields:
-- id: an auto incrementing int that serves as the primary key.
-- burger_name: a string.
-- devoured: a boolean.

CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (id)
);

INSET INTO burgers (burger_name, devoured) VALUES ("Cheese Burger", FALSE);
INSET INTO burgers (burger_name, devoured) VALUES ("Boulder Burger", FALSE);
INSET INTO burgers (burger_name, devoured) VALUES ("PittsBurger", FALSE);


