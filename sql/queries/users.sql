-- name: SelectUsers :many
SELECT * FROM users;

-- name: CreateUser :one
INSERT INTO users(name, manager_id)
VALUES (?, ?)
RETURNING *;
