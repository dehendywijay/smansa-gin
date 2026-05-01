"use client";

import { useState } from "react";
import { Trophy, Plus, Search, Pencil, Trash2, Calendar, User, Info } from "lucide-react";
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

const dummyEkskul = [
  { id: 1, name: "Pramuka", coach: "Bpk. Kurniawan, M.Pd.", schedule: "Jumat, 14:00 - 16:30", members: 120 },
  { id: 2, name: "Badminton", coach: "Bpk. Andi Setiawan, S.Pd.", schedule: "Selasa & Kamis, 15:30 - 17:30", members: 45 },
  { id: 3, name: "Paskibra", coach: "Ibu Siti Aminah, S.Pd.", schedule: "Rabu & Sabtu, 15:00 - 17:00", members: 60 },
  { id: 4, name: "Seni Tari & Musik", coach: "Ibu Maya Sari, S.Sn.", schedule: "Senin & Rabu, 15:30 - 17:30", members: 35 },
];

export default function AdminEkskulPage() {
  const [ekskul, setEkskul] = useState(dummyEkskul);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleDelete = (id: number) => {
    setEkskul(ekskul.filter(e => e.id !== id));
    toast.success("Ekskul berhasil dihapus (Dummy)");
  };

  const filteredEkskul = ekskul.filter(e => 
    e.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold flex items-center gap-2 text-slate-800">
          <Trophy className="text-brand-primary" /> Manajemen Ekstrakurikuler
        </h1>
        <Button onClick={() => setIsDialogOpen(true)} className="rounded-xl bg-brand-primary hover:bg-brand-primary/90 flex items-center gap-2">
          <Plus size={18} /> Tambah Ekskul
        </Button>
      </div>

      <div className="bg-white p-4 md:p-6 rounded-[32px] border border-slate-100 shadow-sm space-y-4">
        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <Input 
            placeholder="Cari ekskul..." 
            className="pl-10 rounded-xl border-slate-200"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="rounded-2xl border border-slate-100 overflow-x-auto">
          <Table className="min-w-[700px]">
            <TableHeader className="bg-slate-50">
              <TableRow>
                <TableHead className="w-16">No</TableHead>
                <TableHead>Nama Ekskul</TableHead>
                <TableHead>Pembina</TableHead>
                <TableHead>Jadwal Latihan</TableHead>
                <TableHead className="text-right">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredEkskul.map((item, index) => (
                <TableRow key={item.id} className="hover:bg-slate-50/50 transition-colors">
                  <TableCell className="font-bold text-slate-400">{index + 1}</TableCell>
                  <TableCell className="font-bold text-slate-800">{item.name}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2 text-slate-600">
                      <User size={14} className="text-brand-primary" />
                      <span className="text-sm font-medium">{item.coach}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2 text-slate-500">
                      <Calendar size={14} className="text-slate-400" />
                      <span className="text-xs font-medium">{item.schedule}</span>
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
            <DialogTitle className="text-xl font-bold">Tambah Ekstrakurikuler</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase">Nama Ekskul</label>
              <Input placeholder="Contoh: Basket, Karya Ilmiah" className="rounded-xl" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase">Pembina</label>
              <Input placeholder="Nama guru pembina..." className="rounded-xl" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase">Jadwal Latihan</label>
              <Input placeholder="Contoh: Senin & Rabu, 15:00" className="rounded-xl" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase">Deskripsi Kegiatan</label>
              <textarea 
                className="w-full h-24 p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 text-sm"
                placeholder="Jelaskan tentang ekskul ini..."
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase">Foto Ekskul</label>
              <Input type="file" className="rounded-xl cursor-pointer" />
            </div>
          </div>
          <DialogFooter className="gap-2">
            <Button onClick={() => setIsDialogOpen(false)} variant="outline" className="rounded-xl">Batal</Button>
            <Button onClick={() => { setIsDialogOpen(false); toast.success("Ekskul berhasil ditambah (Dummy)"); }} className="rounded-xl bg-brand-primary">Simpan</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
