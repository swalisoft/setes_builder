DROP TABLE IF EXISTS sites, servers, databases, servers;
CREATE TABLE users(
  id SERIAl PRIMARY KEY,
  "name" VARCHAR(20),
  "user" VARCHAR(20),
  "password" VARCHAR(20)
);

CREATE TABLE databases(
  id serial PRIMARY KEY,
  "user" varchar(20),
  "password" varchar(20),
  "name" varchar(20)
);

CREATE TABLE servers(  
  id SERIAl PRIMARY KEY,
  "name" VARCHAR(20),
  "password" varchar(20)
);

CREATE TABLE sites(
  id SERIAl PRIMARY KEY,
  "name" VARCHAR(20),
  "domain" VARCHAR(20),
  "user_id" INTEGER,
  "database_id" INTEGER,
  "server_id" INTEGER,

  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY(database_id) REFERENCES databases(id) ON DELETE CASCADE,
  FOREIGN KEY(server_id) REFERENCES servers(id) ON DELETE CASCADE
);
