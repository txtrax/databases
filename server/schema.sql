DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id INT AUTO_INCREMENT NOT NULL,
  name VARCHAR(30) NOT NULL,

  PRIMARY KEY (id)
);

CREATE TABLE friends (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,

  PRIMARY KEY (id)
);

CREATE TABLE rooms (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,

  PRIMARY KEY (id)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT NOT NULL AUTO_INCREMENT,
  text VARCHAR(150) NOT NULL,
  date DATE,
  userID INT NOT NULL,
  friendID INT NOT NULL,
  roomID INT NOT NULL,

  PRIMARY KEY (id),

  FOREIGN KEY (userID) REFERENCES users(id),
  FOREIGN KEY (friendID) REFERENCES friends(id),
  FOREIGN KEY (roomID) REFERENCES rooms(id)
);

/* Create other tables an d define schemas for them here! */
/* INSERT INTO table_name VALUES (value_1, value_2,....); */
INSERT INTO users(name) VALUES ('Amy');
INSERT INTO friends(name) VALUES ('Minggui');
INSERT INTO rooms(name) VALUES ('Sheps');
INSERT INTO messages(text, userID, friendID, roomID) VALUES ('Come visit me :)', 1, 1, 1);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

