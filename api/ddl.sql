CREATE TABLE users(
  id SERIAl PRIMARY KEY,
  nombre VARCHAR(20),
  usuario VARCHAR(20),
  "password" VARCHAR(20),
)
CREATE TABLE sitios(
  id SERIAl PRIMARY KEY,
  nombre VARCHAR(20),
  dominio VARCHAR(20),
)
CREATE TABLE worshop_base(
  id serial PRIMARY key,
  user varchar(20),
  "PASSWORD" varchar(20),
  nombre varchar(20,)
)
create TABLE servidor(  
  id SERIAl PRIMARY KEY,
  nombre VARCHAR(20),  
)
