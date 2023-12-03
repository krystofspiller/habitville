-- Create "users" table
CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  name varchar NOT NULL,
  manager_id int NOT NULL,
  CONSTRAINT manager_fk FOREIGN KEY (manager_id) REFERENCES users (id) ON UPDATE NO ACTION ON DELETE NO ACTION
);
-- Create index "idx_name" to table: "users"
CREATE UNIQUE INDEX idx_name ON users (name);
