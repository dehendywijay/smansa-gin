"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function NewsForm() {
  const [form, setForm] = useState({
    title: "",
    thumbnail: "",
    content: "",
    imageUrl: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    await fetch("/api/news", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })

    alert("Berita berhasil ditambahkan")
  }

  return (
    <Card className="max-w-2xl mx-auto mt-10">
      <CardHeader>
        <CardTitle>Input Berita</CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">

          <Input
            placeholder="Judul Berita"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
          />

          <Input
            placeholder="URL Thumbnail"
            name="thumbnail"
            value={form.thumbnail}
            onChange={handleChange}
            required
          />

          <Textarea
            placeholder="Isi Berita"
            name="content"
            value={form.content}
            onChange={handleChange}
            rows={6}
            required
          />

          <Input
            placeholder="Image URL (optional)"
            name="imageUrl"
            value={form.imageUrl}
            onChange={handleChange}
          />

          <Button type="submit" className="w-full">
            Simpan Berita
          </Button>

        </form>
      </CardContent>
    </Card>
  )
}