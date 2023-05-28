DROP TABLE IF EXISTS sites, servers, databases, users;
CREATE TABLE users(
  id SERIAl PRIMARY KEY,
  "name" VARCHAR(20),
  "email" VARCHAR(20),
  "password" VARCHAR(20)
);

CREATE TABLE servers(  
  id SERIAl PRIMARY KEY,
  "user" VARCHAR(20),
  "password" varchar(20),
  "domain" varchar(20),
  "db_user" VARCHAR(20),
  "db_password" VARCHAR(20),
  "database" VARCHAR(20),
  "user_id" INTEGER,

  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
);
