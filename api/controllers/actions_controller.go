package controllers

import (
	"fmt"
	"net/http"

	"main/api/internal/database"

	"github.com/gorilla/schema"
)

var decoder = schema.NewDecoder()

func (cfg *ApiConfig) CreateActionHandler(w http.ResponseWriter, r *http.Request) {
	err := r.ParseForm()
	if err != nil {
		respondWithError(w, http.StatusBadRequest, "Something went wrong")
		return
	}

	type parameters struct {
		Name string  `schema:"name"`
		Cost float64 `schema:"cost"`
	}

	var params parameters

	err = decoder.Decode(&params, r.PostForm)
	if err != nil {
		respondWithError(w, http.StatusInternalServerError, "Something went wrong")
		return
	}

	// TODO remove
	fmt.Printf("Name: %v, revenue: %f", params.Name, params.Cost)

	_, err = cfg.DB.CreateAction(r.Context(), database.CreateActionParams{
		Name:   params.Name,
		UserID: 1, // TODO hardcoded
		Cost:   params.Cost,
	})
	if err != nil {
		respondWithError(w, http.StatusInternalServerError, err.Error())
		return
	}

	redirect(w, "/")
}
