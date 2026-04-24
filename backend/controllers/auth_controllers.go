package controllers

import (
	"fmt"
	"gin-app/models"
	"gin-app/services"
	"gin-app/utility"
	"net/http"

	"github.com/gin-gonic/gin"
)

func CreateNews(c *gin.Context) {
	title := c.PostForm("title")
	content := c.PostForm("content")

	if title == "" || content == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "title and content are required"})
		return
	}

	fileBytes, objectPath, contentType, err := utility.ProcessImageUpload(c, "image")
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	publicURL, err := services.UploadToSupabase("image_thumbnail", objectPath, contentType, fileBytes)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	news := models.News{
		Title:     title,
		Content:   content,
		Thumbnail: publicURL,
	}

	result, err := services.CreateNews(news)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "Berita berhasil dibuat",
		"data":    result,
	})
}

func GetNews(c *gin.Context) {
	fmt.Println("GET /api/news hit")
	result, err := services.GetNews()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, result)
}

func GetNewsByID(c *gin.Context) {
	fmt.Println("GET /api/news hit")
	id := c.Param("slug")
	result, err := services.GetNewsByID(id)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, result)
}
