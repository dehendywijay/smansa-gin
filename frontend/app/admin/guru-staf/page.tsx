"use client";

import { useState } from "react";
import { GraduationCap, Plus, Search, Pencil, Trash2, User, BookOpen } from "lucide-react";
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

// Data Dummy Guru
const dummyStaff = [
  { id: 1, name: "Drs. Budi Santoso", nip: "197503122005011001", position: "Wakil Kepala Sekolah", subject: "Matematika", image: null },
  { id: 2, name: "Siti Aminah, S.Pd.", nip: "198205202010012003", position: "Guru Ahli Madya", subject: "Bahasa Indonesia", image: null },
  { id: 3, name: "Iwan Setiawan, M.Si.", nip: "198001052008011005", position: "Guru Ahli Muda", subject: "Fisika", image: null },
  { id: 4, name: "Rina Kartika, S.Pd.", nip: "198811302015022001", position: "Guru Pertama", subject: "Bahasa Inggris", image: null },
  { id: 5, name: "Hendy Wijaya, S.Kom.", nip: "199204152019031002", position: "Staf IT", subject: "TIK", image: null },
];

export default function AdminGuruStafPage() {
  const [staff, setStaff] = useState(dummyStaff);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleDelete = (id: number) => {
    setStaff(staff.filter(s => s.id !== id));
    toast.success("Data berhasil dihapus (Dummy)");
  };

  const filteredStaff = staff.filter(s => 
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    s.nip.includes(searchQuery)
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold flex items-center gap-2 text-slate-800">
          <GraduationCap className="text-brand-primary" /> Manajemen Guru & Staf
        </h1>
        <Button onClick={() => setIsDialogOpen(true)} className="rounded-xl bg-brand-primary hover:bg-brand-primary/90 flex items-center gap-2">
          <Plus size={18} /> Tambah Guru/Staf
        </Button>
      </div>

      <div className="bg-white p-4 md:p-6 rounded-[32px] border border-slate-100 shadow-sm space-y-4">
        {/* Filter Area */}
        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <Input 
            placeholder="Cari nama atau NIP..." 
            className="pl-10 rounded-xl border-slate-200"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Table Area */}
        <div className="rounded-2xl border border-slate-100 overflow-x-auto">
          <Table className="min-w-[800px]">
            <TableHeader className="bg-slate-50">
              <TableRow>
                <TableHead className="w-16">No</TableHead>
                <TableHead>Nama & NIP</TableHead>
                <TableHead>Jabatan</TableHead>
                <TableHead>Mata Pelajaran</TableHead>
                <TableHead className="text-right">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStaff.map((person, index) => (
                <TableRow key={person.id} className="hover:bg-slate-50/50 transition-colors">
                  <TableCell className="font-bold text-slate-400">{index + 1}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-brand-primary">
                        <User size={20} />
                      </div>
                      <div>
                        <div className="font-bold text-slate-800">{person.name}</div>
                        <div className="text-xs text-slate-400">{person.nip}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium text-slate-600">{person.position}</TableCell>
                  <TableCell>
                    <span className="px-3 py-1 rounded-full bg-brand-surface-alt text-brand-primary text-xs font-bold flex items-center w-fit gap-1.5">
                      <BookOpen size={12} /> {person.subject}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon" className="text-slate-400 hover:text-brand-primary hover:bg-brand-surface-alt rounded-lg">
                        <Pencil size={16} />
                      </Button>
                      <Button onClick={() => handleDelete(person.id)} variant="ghost" size="icon" className="text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg">
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

      {/* Add/Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-md rounded-[32px]">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Tambah Guru & Staf</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase">Nama Lengkap</label>
              <Input placeholder="Contoh: Nama, Gelar" className="rounded-xl" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase">NIP</label>
              <Input placeholder="Masukkan 18 digit NIP" className="rounded-xl" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase">Jabatan</label>
                <Input placeholder="Contoh: Guru Ahli" className="rounded-xl" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase">Mata Pelajaran</label>
                <Input placeholder="Contoh: Biologi" className="rounded-xl" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase">Upload Foto</label>
              <Input type="file" className="rounded-xl cursor-pointer" />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={() => setIsDialogOpen(false)} variant="outline" className="rounded-xl">Batal</Button>
            <Button onClick={() => { setIsDialogOpen(false); toast.success("Data berhasil ditambah (Dummy)"); }} className="rounded-xl bg-brand-primary">Simpan</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
