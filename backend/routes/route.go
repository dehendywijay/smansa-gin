package routes

import (
	"gin-app/controllers"

	"github.com/gin-gonic/gin"
)

func NewsRoute(r *gin.Engine) {
	news := r.Group("/api/news")
	{
		news.POST("", controllers.CreateNews)
		news.GET("", controllers.GetNews)
		news.GET("/", controllers.GetNews)
		news.GET("/:slug", controllers.GetNewsByID)
		news.PUT("/:slug", controllers.UpdateNews)
		news.DELETE("/:slug", controllers.DeleteNews)
	}
}