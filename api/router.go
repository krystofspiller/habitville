package api

import (
	"net/http"

	"main/api/controllers"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/cors"
)

func initRouter(cfg *controllers.ApiConfig) http.Handler {
	r := chi.NewRouter()
	api := chi.NewRouter()

	r.Use(cors.Handler(cors.Options{}))

	// API
	api.Post("/actions", cfg.CreateActionHandler)

	// Mount API
	r.Mount("/api", api)

	return r
}
