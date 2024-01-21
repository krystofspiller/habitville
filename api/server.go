package api

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"
	"os"

	"main/api/controllers"

	"main/api/internal/database"

	"github.com/joho/godotenv"
	_ "github.com/libsql/libsql-client-go/libsql"
	_ "github.com/mattn/go-sqlite3"
)

func Server() {
	godotenv.Load()

	var connectionString string

	if os.Getenv("LOCAL") == "true" {
		fmt.Println("Using local DB")
		connectionString = "file:./file.db"
	} else {
		fmt.Println("Using Turso DB")
		connectionString = os.Getenv("TURSO_URL") + "?authToken=" + os.Getenv("TURSO_TOKEN")
	}

	db, err := sql.Open("libsql", connectionString)
	if err != nil {
		log.Fatal("connecting to DB failed", err)
	}
	dbQueries := database.New(db)
	apiCfg := controllers.ApiConfig{
		DB: dbQueries,
	}

	var srv = http.Server{
		Addr:    "localhost:" + os.Getenv("PORT"),
		Handler: initRouter(&apiCfg),
	}

	fmt.Println("Starting: localhost:" + os.Getenv("PORT"))
	err = srv.ListenAndServe()
	if err != nil {
		log.Fatal(err)
	}
}
