package main

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/Laegas/habitville/controllers"
	"github.com/Laegas/habitville/internal/database"
	"github.com/joho/godotenv"
	_ "github.com/libsql/libsql-client-go/libsql"
)

func main() {
	godotenv.Load()

	connectionString := os.Getenv("TURSO_URL") + "?authToken=" + os.Getenv("TURSO_TOKEN")

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
	fmt.Println("End")
}
