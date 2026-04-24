package services

import (
	"gin-app/config"
	"gin-app/models"
)


func CreateNews(data models.News) (models.News, error) {
	err := config.DB.Create(&data).Error
	return data, err
}

func GetNews() ([]models.News, error) {
	var news []models.News
	err := config.DB.Find(&news).Error
	return news, err
}

func GetNewsByID(id string) (models.News, error) {
	var news models.News
	err := config.DB.Where("id = ?", id).First(&news).Error
	return news, err
}

func UpdateNews(id string, data models.News) (models.News, error) {
	var news models.News
	err := config.DB.Where("id = ?", id).First(&news).Error
	if err != nil {
		return news, err
	}
	err = config.DB.Model(&news).Updates(data).Error
	return news, err
}