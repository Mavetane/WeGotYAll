CREATE TABLE postgres."Workers".DogWalkers
(
  user_id serial PRIMARY KEY,
  username VARCHAR ( 50 ) UNIQUE NOT NULL,
  fullnames VARCHAR (150) unique NOT NULL,
  city VARCHAR (80) unique not NUll,
  address VARCHAR ( 200 ) NOT NULL,
  email VARCHAR ( 255 ) UNIQUE NOT NULL,
  occupation VARCHAR (30) unique not NULL,
  created_on TIMESTAMP NOT NULL
)

CREATE TABLE postgres."Workers".Plumbers
(
  user_id serial PRIMARY KEY,
  username VARCHAR ( 50 ) UNIQUE NOT NULL,
  fullnames VARCHAR (150) unique NOT NULL,
  city VARCHAR (80) unique not NUll,
  address VARCHAR ( 200 ) NOT NULL,
  email VARCHAR ( 255 ) UNIQUE NOT NULL,
  occupation VARCHAR (30) unique not NULL,
  created_on TIMESTAMP NOT NULL
)
CREATE TABLE postgres."Workers".BabySitters
(
  user_id serial PRIMARY KEY,
  username VARCHAR ( 50 ) UNIQUE NOT NULL,
  fullnames VARCHAR (150) unique NOT NULL,
  city VARCHAR (80) unique not NUll,
  address VARCHAR ( 200 ) NOT NULL,
  email VARCHAR ( 255 ) UNIQUE NOT NULL,
  occupation VARCHAR (30) unique not NULL,
  created_on TIMESTAMP NOT NULL
)

CREATE TABLE postgres."Workers".Nannies
(
  user_id serial PRIMARY KEY,
  username VARCHAR ( 50 ) UNIQUE NOT NULL,
  fullnames VARCHAR (150) unique NOT NULL,
  city VARCHAR (80) unique not NUll,
  address VARCHAR ( 200 ) NOT NULL,
  email VARCHAR ( 255 ) UNIQUE NOT NULL,
  occupation VARCHAR (30) unique not NULL,
  created_on TIMESTAMP NOT NULL
)

CREATE TABLE postgres."Workers".handyMen
(
  user_id serial PRIMARY KEY,
  username VARCHAR ( 50 ) UNIQUE NOT NULL,
  fullnames VARCHAR (150) unique NOT NULL,
  city VARCHAR (80) unique not NUll,
  address VARCHAR ( 200 ) NOT NULL,
  email VARCHAR ( 255 ) UNIQUE NOT NULL,
  occupation VARCHAR (30) unique not NULL,
  created_on TIMESTAMP NOT NULL
)