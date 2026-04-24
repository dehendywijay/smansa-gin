package main

import (
	"gin-app/config"
	"gin-app/models"
	"gin-app/routes"
	"os"
	"gin-app/middleware"
	"github.com/gin-gonic/gin"

)

func main() {
	r := gin.Default()
	r.Use(middleware.CORSMiddleware())

	config.ConnectDB()
	config.DB.AutoMigrate(&models.News{})
	
	routes.NewsRoute(r)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	r.Run(":" + port)
}