-- name: SelectUsers :many
SELECT * FROM users;

-- name: SelectUser :one
SELECT * FROM users WHERE id=?;

-- name: CreateUser :one
INSERT INTO users(email, password, balance)
VALUES (?, ?, ?)
RETURNING *;
