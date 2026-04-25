// Komponen ini bertanggung jawab untuk menampilkan daftar berita dalam bentuk tabel.
"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Pencil } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import NewsForm from "./NewsForm";
import { formatDate } from "@/lib/date";
import { useNewsData } from "@/hook/useNewsData";
import ReusablePagination from "../shared/ReusablePagination"; // Impor komponen paginasi baru
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "sonner";
import { AlertDialogDestructive } from "./alert-delete";
import { api_news } from "@/constans/strings";

export default function NewsDataTable() {
  const router = useRouter();

  const deleteNews = async (slug: string) => {
    const res = await axios.delete(`${api_news}/${slug}`);
    if (res.status === 200) {
      toast.success(res.data.message);
      router.push("/admin");
    } else {
      toast.error(res.data.error);
    }
    return res;
    
  };

  const { paginatedNews, isFormOpen, editingNews, currentPage, totalPages, handleSave, handleEdit, setIsFormOpen, setCurrentPage } = useNewsData();

  return (
    <div className="space-y-4 ">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <Input placeholder="Cari berita..." className="max-w-sm" />
        <div className="flex items-center gap-2">
          <Select>
            <SelectTrigger className="w-45">
              <SelectValue placeholder="Filter berdasarkan status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Semua</SelectItem>
              <SelectItem value="published">Diterbitkan</SelectItem>
              <SelectItem value="draft">Draf</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={() => router.push(`/admin/news/add/`)}>Tambah Berita</Button>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Judul</TableHead>
              <TableHead>Tanggal</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedNews.map((newsItem) => (
              <TableRow key={newsItem.ID}>
                <TableCell>{newsItem.ID}</TableCell>
                <TableCell className="font-medium">{newsItem.title.split(" ").slice(0, 10).join(" ")}...</TableCell>
                <TableCell>{formatDate(newsItem.CreatedAt)}</TableCell>
                <TableCell>
                  <Badge variant={newsItem.status === "published" ? "default" : "secondary"}>{newsItem.status}</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleEdit(newsItem)}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                    {/* <Button variant="ghost" size="icon" className="text-red-500" onClick={() => {deleteNews(newsItem.id)}}>
                      <Trash2 className="h-4 w-4" />
                    </Button> */}
                    <AlertDialogDestructive onDelete={() => deleteNews(newsItem.slug)} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {/* Gunakan komponen paginasi yang dapat digunakan kembali */}
      <ReusablePagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
      <NewsForm open={isFormOpen} onOpenChange={setIsFormOpen} onSave={handleSave} initialData={editingNews} />
    </div>
  );
}
