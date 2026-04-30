package models

import "gorm.io/gorm"

type News struct {
	gorm.Model
	Title     string `json:"title" gorm:"not null"`
	Thumbnail string `json:"thumbnail" gorm:"not null"`
	Content   string `json:"content" gorm:"not null"`
	Slug      string `json:"slug" gorm:"not null"`
}

type KepalaSekolah struct {
	gorm.Model
	Name    string `json:"name" gorm:"not null"`
	Foto    string `json:"foto" gorm:"not null"`
	Content string `json:"content" gorm:"not null"`
}
