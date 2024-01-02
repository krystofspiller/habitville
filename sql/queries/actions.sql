-- name: CreateAction :one
INSERT INTO actions(user_id, name, cost)
VALUES (?, ?, ?)
RETURNING *;
