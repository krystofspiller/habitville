package main

import (
	"net/http"

	"github.com/Laegas/habitville/controllers"
	"github.com/Laegas/habitville/templates"
	"github.com/Laegas/habitville/templates/pages"
	"github.com/a-h/templ"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/cors"
)

func initRouter(cfg *controllers.ApiConfig) http.Handler {
	r := chi.NewRouter()
	app := chi.NewRouter()
	api := chi.NewRouter()

	r.Use(cors.Handler(cors.Options{}))

	// App
	app.Handle("/", templ.Handler(templates.BaseHtml(pages.Index())))
	app.Handle("/add_action", templ.Handler(templates.BaseHtml(pages.CreateAction())))

	// API
	api.Post("/actions", cfg.CreateActionHandler)

	// Mount app and API
	r.Mount("/", app)
	r.Mount("/api", api)

	return r
}
