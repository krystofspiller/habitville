package controllers

import (
	"net/http"

	"github.com/Laegas/habitville/internal/database"
)

type ApiConfig struct {
	DB *database.Queries
}

// TODO
func (cfg *ApiConfig) HelloHandler(w http.ResponseWriter, r *http.Request) {
	_, err := cfg.DB.CreateUser(r.Context(), database.CreateUserParams{
		Name:      "Handler",
		ManagerID: 69,
	})
	if err != nil {
		respondWithError(w, http.StatusInternalServerError, err.Error())
		return
	}

	payload := map[string]string{
		"status": "ok",
	}
	respondWithJSON(w, http.StatusOK, payload)
}
