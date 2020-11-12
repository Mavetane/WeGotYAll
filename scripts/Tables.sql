ALTER TABLE "Workers".nannies RENAME TO maids;
CREATE SCHEMA Authentication
/Authorization;
CREATE SCHEMA Seekers;
CREATE SCHEMA Workers;

CREATE TABLE postgres."Authentication".users
(
  user_id serial PRIMARY KEY,
  username VARCHAR ( 225 ) UNIQUE NOT NULL,
  email VARCHAR (225) unique not NUll,
  password VARCHAR ( 255 ) NOT NULL,
  timestamp timestamp
    default current_timestamp
);
CREATE TABLE "Authentication".users
(
  user_id serial PRIMARY KEY,
  username VARCHAR (225) unique not NULL,
  password VARCHAR (225) not NULL,
  timpestamp timestamp
    default current_timestamp
);



CREATE TABLE postgres."Workers".DogWalkers
(
  user_id serial PRIMARY KEY,
  username VARCHAR ( 50 ) UNIQUE NOT NULL,
  fullnames VARCHAR (150) unique NOT NULL,
  city VARCHAR (80) unique not NUll,
  address VARCHAR ( 200 ) NOT NULL,
  email VARCHAR ( 255 ) UNIQUE NOT NULL,
  occupation VARCHAR (30) unique not NULL,
  timestamp timestamp default current_timestamp
)

INSERT INTO postgres."Workers".DogWalkers
  (username, fullnames, city, address, email, occupation)
values('Sammy', 'Samantha Stark', 'johannesburg', '233 walter street', 'sammy@gmail.com', 'dogWalker')


CREATE TABLE postgres."Seekers".Plumbers
(
  user_id serial PRIMARY KEY,
  occupation VARCHAR (30) not NULL,
  username VARCHAR ( 50 ) UNIQUE NOT NULL,
  city VARCHAR (80) unique not NUll,
  description VARCHAR ( 350 ) NOT NULL,
  email VARCHAR (80) unique not NUll,
  province VARCHAR ( 100 ) NOT NULL,
  timestamp timestamp
    default current_timestamp
)
INSERT INTO postgres."Seekers".Plumbers
  (occupation, username, city, email, province)
values('Plumber', 'Mavetane', 'johannesburg', 'sammy@gmail.com', 'Gauteng')


