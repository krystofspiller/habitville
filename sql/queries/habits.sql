-- name: CreateHabit :one
INSERT INTO habits(user_id, name, revenue)
VALUES (?, ?, ?)
RETURNING *;
