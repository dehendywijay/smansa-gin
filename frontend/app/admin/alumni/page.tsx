"use client";

import { useState } from "react";
import { BookOpen, Plus, Search, Pencil, Trash2, GraduationCap, School } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter 
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { BookOpen as BookOpenIcon } from "lucide-react";

const dummyAlumni = [
  { id: 1, name: "Budi Santoso", university: "Universitas Indonesia" },
  { id: 2, name: "Siti Aminah", university: "Institut Teknologi Bandung" },
  { id: 3, name: "Iwan Setiawan", university: "Universitas Gadjah Mada" },
  { id: 4, name: "Rina Kartika", university: "Universitas Lampung" },
  { id: 5, name: "Hendy Wijaya", university: "IPB University" },
];

export default function AdminAlumniPage() {
  const [alumni, setAlumni] = useState(dummyAlumni);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleDelete = (id: number) => {
    setAlumni(alumni.filter(a => a.id !== id));
    toast.success("Data alumni berhasil dihapus (Dummy)");
  };

  const filteredAlumni = alumni.filter(a => 
    a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    a.university.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold flex items-center gap-2 text-slate-800">
          <BookOpenIcon className="text-brand-primary" /> Manajemen Alumni
        </h1>
        <Button onClick={() => setIsDialogOpen(true)} className="rounded-xl bg-brand-primary hover:bg-brand-primary/90 flex items-center gap-2">
          <Plus size={18} /> Tambah Alumni
        </Button>
      </div>

      <div className="bg-white p-4 md:p-6 rounded-[32px] border border-slate-100 shadow-sm space-y-4">
        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <Input 
            placeholder="Cari nama atau universitas..." 
            className="pl-10 rounded-xl border-slate-200"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="rounded-2xl border border-slate-100 overflow-x-auto">
          <Table className="min-w-[600px]">
            <TableHeader className="bg-slate-50">
              <TableRow>
                <TableHead className="w-16">No</TableHead>
                <TableHead>Nama Alumni</TableHead>
                <TableHead>Diterima di Perguruan Tinggi</TableHead>
                <TableHead className="text-right">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAlumni.map((item, index) => (
                <TableRow key={item.id} className="hover:bg-slate-50/50 transition-colors">
                  <TableCell className="font-bold text-slate-400">{index + 1}</TableCell>
                  <TableCell>
                    <div className="font-bold text-slate-800 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-brand-surface-alt flex items-center justify-center text-brand-primary">
                        {item.name.charAt(0)}
                      </div>
                      {item.name}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2 text-slate-600 font-medium italic">
                      <School size={16} className="text-brand-primary/60" />
                      {item.university}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon" className="text-slate-400 hover:text-brand-primary hover:bg-brand-surface-alt rounded-lg">
                        <Pencil size={16} />
                      </Button>
                      <Button onClick={() => handleDelete(item.id)} variant="ghost" size="icon" className="text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg">
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-md rounded-[32px]">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Tambah Data Alumni</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase">Nama Lengkap</label>
              <Input placeholder="Masukkan nama alumni..." className="rounded-xl" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase">Universitas / Perguruan Tinggi</label>
              <Input placeholder="Contoh: Universitas Lampung" className="rounded-xl" />
            </div>
          </div>
          <DialogFooter className="gap-2">
            <Button onClick={() => setIsDialogOpen(false)} variant="outline" className="rounded-xl">Batal</Button>
            <Button onClick={() => { setIsDialogOpen(false); toast.success("Alumni berhasil ditambah (Dummy)"); }} className="rounded-xl bg-brand-primary">Simpan</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
