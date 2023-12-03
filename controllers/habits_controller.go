package controllers

import (
	"fmt"
	"net/http"

	"github.com/Laegas/habitville/internal/database"
	"github.com/gorilla/schema"
)

var decoder = schema.NewDecoder()

func (cfg *ApiConfig) CreateHabitHandler(w http.ResponseWriter, r *http.Request) {
	err := r.ParseForm()
	if err != nil {
		respondWithError(w, http.StatusBadRequest, "Something went wrong")
		return
	}

	type parameters struct {
		Name    string  `schema:"name"`
		Revenue float64 `schema:"revenue"`
	}

	var params parameters

	err = decoder.Decode(&params, r.PostForm)
	if err != nil {
		respondWithError(w, http.StatusInternalServerError, "Something went wrong")
		return
	}

	fmt.Printf("Name: %v, revenue: %f", params.Name, params.Revenue)

	habit, err := cfg.DB.CreateHabit(r.Context(), database.CreateHabitParams{
		Name:    params.Name,
		UserID:  1, // TODO hardcoded
		Revenue: params.Revenue,
	})
	if err != nil {
		respondWithError(w, http.StatusInternalServerError, err.Error())
		return
	}

	respondWithJSON(w, http.StatusOK, habit)
}
