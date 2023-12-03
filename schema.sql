CREATE TABLE users (
  id integer PRIMARY KEY,
  email varchar,
  password varchar,
  balance real default 0
);

CREATE TABLE habits (
  id integer PRIMARY KEY,
  user_id integer NOT NULL,
  name varchar NOT NULL,
  revenue real NOT NULL,
  CONSTRAINT user_fk FOREIGN KEY (user_id) REFERENCES users (id) ON UPDATE NO ACTION ON DELETE NO ACTION
);

CREATE TABLE rewards (
  id integer PRIMARY KEY,
  user_id integer NOT NULL,
  name varchar NOT NULL,
  cost real NOT NULL,
  CONSTRAINT user_fk FOREIGN KEY (user_id) REFERENCES users (id) ON UPDATE NO ACTION ON DELETE NO ACTION
);

CREATE TABLE performed_habits (
  user_id integer NOT NULL,
  habit_id integer NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, habit_id),
  CONSTRAINT user_fk FOREIGN KEY (user_id) REFERENCES users (id) ON UPDATE NO ACTION ON DELETE NO ACTION,
  CONSTRAINT habit_fk FOREIGN KEY (habit_id) REFERENCES habits (id) ON UPDATE NO ACTION ON DELETE NO ACTION
);

CREATE TABLE performed_rewards (
  user_id integer NOT NULL,
  reward_id integer NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, reward_id),
  CONSTRAINT user_fk FOREIGN KEY (user_id) REFERENCES users (id) ON UPDATE NO ACTION ON DELETE NO ACTION,
  CONSTRAINT reward_fk FOREIGN KEY (reward_id) REFERENCES rewards (id) ON UPDATE NO ACTION ON DELETE NO ACTION
);
