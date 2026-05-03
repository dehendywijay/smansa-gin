package controllers

import (
	"gin-app/models"
	"gin-app/services"
	"net/http"
	"gin-app/utility"

	"github.com/gin-gonic/gin"
)

func CreateEskul(c *gin.Context) {
	nama := c.PostForm("nama")
	pembina := c.PostForm("pembina")
	jadwal := c.PostForm("jadwal")
	prestasi := c.PostForm("prestasi")

	fileBytes, objectPath, contentType, err := utility.ProcessImageUpload(c, "foto")
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Gagal memproses gambar: " })
		return
	}

	publicURL, err := services.UploadToSupabase("eskul", objectPath, contentType, fileBytes)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Gagal mengunggah gambar " })
		return
	}

	eskul := models.Eskul{
		Nama:    nama,
		Pembina: pembina,
		Jadwal:  jadwal,
		Prestasi: prestasi,
		Foto:    publicURL,
		Slug:    utility.MakeSlug(nama),
	}


	_, err = services.CreateEskul(eskul)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, "Data berhasil dibuat")
	}


func GetEskul(c *gin.Context) {
	eskul, err := services.GetEskul()	
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, eskul)
}

func GetEskulByID(c *gin.Context) {
	id := c.Param("slug")
	eskul, err := services.GetEskulByID(id)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, eskul)
}

func EditEskul(c *gin.Context) {
	id := c.Param("slug")
	nama := c.PostForm("nama")
	pembina := c.PostForm("pembina")
	jadwal := c.PostForm("jadwal")
	prestasi := c.PostForm("prestasi")

	eskul := models.Eskul{
		Nama:    nama,
		Pembina: pembina,
		Jadwal:  jadwal,
		Prestasi: prestasi,
		Slug: utility.MakeSlug(nama),
	}

	file, _ := c.FormFile("foto")
	if file != nil {
		fileBytes, objectPath, contentType, err := utility.ProcessImageUpload(c, "foto")
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		publicURL, err := services.UploadToSupabase("eskul", objectPath, contentType, fileBytes)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}

		eskul.Foto = publicURL
	}


	_ , err := services.EditEskul(id, eskul)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, "Data berhasil diperbarui")
}

func DeleteEskul(c *gin.Context) {
	id := c.Param("slug")
	err := services.DeleteEskul(id)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, "Data berhasil dihapus")
}