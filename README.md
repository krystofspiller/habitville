# HabitVille

CREATE TABLE users (
id integer PRIMARY KEY,
email varchar,
password varchar,
balance real default 0
);

CREATE TABLE actions (
id integer PRIMARY KEY,
user_id integer NOT NULL,
name varchar NOT NULL,
cost real NOT NULL,
CONSTRAINT user_fk FOREIGN KEY (user_id) REFERENCES users (id) ON UPDATE NO ACTION ON DELETE NO ACTION
);

CREATE TABLE performed_actions (
id integer PRIMARY KEY,
action_id integer NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
CONSTRAINT action_fk FOREIGN KEY (action_id) REFERENCES actions (id) ON UPDATE NO ACTION ON DELETE NO ACTION
);
