package routes

import (
	"gin-app/controllers"
	"gin-app/middleware"
	"github.com/gin-gonic/gin"
)

func NewsRoute(r *gin.Engine) {
	news := r.Group("/api/news")
	{
		news.GET("", controllers.GetNews)
		news.GET("/", controllers.GetNews)
		news.GET("/:slug", controllers.GetNewsByID)
	}
	news.Use(middleware.AuthMiddleware())
	{
		news.POST("", controllers.CreateNews)
		news.PUT("/:slug", controllers.UpdateNews)
		news.DELETE("/:slug", controllers.DeleteNews)
	}
}

func AuthRoute(r *gin.Engine) {
	auth := r.Group("/api/auth")
	{
		auth.POST("/login", controllers.LoginAdmin)
		auth.POST("/register", controllers.CreateAdmin)
		auth.POST("/refresh", controllers.RefreshToken)
	}
}