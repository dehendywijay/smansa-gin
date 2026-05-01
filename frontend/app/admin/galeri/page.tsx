"use client";

import { useState } from "react";
import { 
  Images, 
  Plus, 
  Trash2, 
  ExternalLink, 
  Image as ImageIcon, 
  Upload, 
  Link as LinkIcon, 
  Calendar,
  Play,
  Video
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter,
  DialogDescription
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const dummyGallery = [
  { id: 1, type: "foto", title: "Upacara Hari Guru", date: "25 Nov 2023", image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=400&auto=format&fit=crop" },
  { id: 2, type: "foto", title: "Lomba HUT RI", date: "17 Agu 2023", image: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&w=400&auto=format&fit=crop" },
  { id: 3, type: "video", title: "Profile SMAN 1 Bangunrejo", date: "10 Okt 2023", image: "https://images.unsplash.com/photo-1514525253344-99a42994a438?q=80&w=400&auto=format&fit=crop", videoUrl: "https://youtube.com/..." },
  { id: 4, type: "video", title: "Highlight HUT Ke-30", date: "05 Des 2023", image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=400&auto=format&fit=crop", videoUrl: "https://youtube.com/..." },
];

export default function AdminGaleriPage() {
  const [gallery, setGallery] = useState(dummyGallery);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [viewType, setViewType] = useState("foto"); // "foto" | "video"
  const [contentType, setContentType] = useState("foto"); // Selection in dialog

  const handleDelete = (id: number) => {
    setGallery(gallery.filter(g => g.id !== id));
    toast.success("Item berhasil dihapus (Dummy)");
  };

  const filteredGallery = gallery.filter(item => item.type === viewType);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold flex items-center gap-2 text-slate-800">
          <Images className="text-brand-primary" /> Manajemen Galeri
        </h1>
        <Button onClick={() => setIsDialogOpen(true)} className="rounded-xl bg-brand-primary hover:bg-brand-primary/90 flex items-center gap-2">
          <Plus size={18} /> Tambah Konten
        </Button>
      </div>

      {/* Filter Tabs */}
      <Tabs defaultValue="foto" onValueChange={setViewType} className="w-full">
        <TabsList className="bg-white p-1 rounded-2xl border border-slate-100 shadow-sm inline-flex mb-6">
          <TabsTrigger value="foto" className="rounded-xl px-6 data-[state=active]:bg-brand-primary data-[state=active]:text-white">
            Dokumentasi Kegiatan (Foto)
          </TabsTrigger>
          <TabsTrigger value="video" className="rounded-xl px-6 data-[state=active]:bg-brand-primary data-[state=active]:text-white">
            Video Kegiatan
          </TabsTrigger>
        </TabsList>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredGallery.map((item) => (
            <div key={item.id} className="group relative bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
              {/* Thumbnail Area */}
              <div className="aspect-[4/3] relative overflow-hidden bg-slate-200">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay Icons */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <Button variant="secondary" size="icon" className="rounded-full bg-white/20 backdrop-blur-md text-white border-white/20 hover:bg-white/40">
                    <ExternalLink size={18} />
                  </Button>
                  <Button 
                    onClick={() => handleDelete(item.id)}
                    variant="destructive" 
                    size="icon" 
                    className="rounded-full shadow-lg"
                  >
                    <Trash2 size={18} />
                  </Button>
                </div>

                {/* Video Play Indicator */}
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity">
                    <div className="bg-white/90 p-3 rounded-full shadow-xl">
                      <Play className="fill-brand-primary text-brand-primary ml-0.5" size={24} />
                    </div>
                  </div>
                )}
              </div>

              {/* Content Info */}
              <div className="p-5">
                <h3 className="font-bold text-slate-800 line-clamp-1 mb-2">{item.title}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    <Calendar size={12} className="text-brand-primary/60" />
                    {item.date}
                  </div>
                  <span className={cn(
                    "text-[8px] font-black uppercase px-2 py-0.5 rounded-md tracking-tighter",
                    item.type === "foto" ? "bg-blue-50 text-blue-500" : "bg-red-50 text-red-500"
                  )}>
                    {item.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
          {filteredGallery.length === 0 && (
            <div className="col-span-full py-20 text-center bg-slate-50 rounded-[40px] border border-dashed border-slate-200">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                {viewType === "foto" ? <ImageIcon className="text-slate-300" /> : <Video className="text-slate-300" />}
              </div>
              <h3 className="font-bold text-slate-800">Belum ada konten</h3>
              <p className="text-xs text-slate-400 mt-1">Klik tombol di atas untuk menambah {viewType === "foto" ? "foto" : "video"} baru.</p>
            </div>
          )}
        </div>
      </Tabs>

      {/* Add Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-md rounded-[32px]">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Tambah Konten Baru</DialogTitle>
            <DialogDescription>Pilih kategori konten yang ingin Anda tambahkan.</DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6 py-2">
            {/* Type Selector */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tipe Konten</label>
              <Tabs defaultValue="foto" onValueChange={setContentType} className="w-full">
                <TabsList className="grid grid-cols-2 rounded-xl bg-slate-100 p-1">
                  <TabsTrigger value="foto" className="rounded-lg gap-2 data-[state=active]:bg-white data-[state=active]:shadow-sm">
                    <ImageIcon size={14} /> Foto Kegiatan
                  </TabsTrigger>
                  <TabsTrigger value="video" className="rounded-lg gap-2 data-[state=active]:bg-white data-[state=active]:shadow-sm">
                    <Video size={14} /> Video Kegiatan
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Judul Momen</label>
              <Input placeholder={contentType === "foto" ? "Contoh: Upacara Bendera" : "Contoh: Highlight Pentas Seni"} className="rounded-xl border-slate-200" />
            </div>

            {contentType === "foto" ? (
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Sumber Gambar</label>
                <Tabs defaultValue="upload" className="w-full">
                  <TabsList className="grid grid-cols-2 rounded-xl bg-slate-100 p-1">
                    <TabsTrigger value="upload" className="rounded-lg gap-2 data-[state=active]:bg-white data-[state=active]:shadow-sm">
                      <Upload size={14} /> Upload File
                    </TabsTrigger>
                    <TabsTrigger value="url" className="rounded-lg gap-2 data-[state=active]:bg-white data-[state=active]:shadow-sm">
                      <LinkIcon size={14} /> URL Gambar
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="upload" className="pt-3">
                    <div className="relative border-2 border-dashed border-slate-200 rounded-xl p-8 text-center hover:bg-slate-50 transition-colors cursor-pointer group">
                      <ImageIcon size={32} className="mx-auto text-slate-300 mb-2 group-hover:text-brand-primary transition-colors" />
                      <p className="text-xs text-slate-400">Seret foto atau klik untuk upload</p>
                      <Input type="file" className="hidden" id="gallery-upload" accept="image/*" />
                      <label htmlFor="gallery-upload" className="absolute inset-0 cursor-pointer" />
                    </div>
                  </TabsContent>
                  <TabsContent value="url" className="pt-3">
                    <Input placeholder="https://contoh-gambar.com/foto.jpg" className="rounded-xl border-slate-200" />
                  </TabsContent>
                </Tabs>
              </div>
            ) : (
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Sumber Video</label>
                <Tabs defaultValue="url" className="w-full">
                  <TabsList className="grid grid-cols-2 rounded-xl bg-slate-100 p-1">
                    <TabsTrigger value="url" className="rounded-lg gap-2 data-[state=active]:bg-white data-[state=active]:shadow-sm">
                      <LinkIcon size={14} /> URL Youtube
                    </TabsTrigger>
                    <TabsTrigger value="upload" className="rounded-lg gap-2 data-[state=active]:bg-white data-[state=active]:shadow-sm">
                      <Upload size={14} /> Upload MP4
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="url" className="pt-3">
                    <div className="relative">
                      <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                      <Input placeholder="https://www.youtube.com/watch?v=..." className="pl-10 rounded-xl border-slate-200" />
                    </div>
                    <p className="text-[10px] text-slate-400 mt-2 italic px-1">*Sistem akan otomatis mengambil thumbnail dari video.</p>
                  </TabsContent>
                  <TabsContent value="upload" className="pt-3">
                    <div className="relative border-2 border-dashed border-slate-200 rounded-xl p-8 text-center hover:bg-slate-50 transition-colors cursor-pointer group">
                      <Video size={32} className="mx-auto text-slate-300 mb-2 group-hover:text-brand-primary transition-colors" />
                      <p className="text-xs text-slate-400">Seret video MP4 atau klik untuk upload</p>
                      <Input type="file" className="hidden" id="video-upload" accept="video/mp4,video/x-m4v,video/*" />
                      <label htmlFor="video-upload" className="absolute inset-0 cursor-pointer" />
                    </div>
                    <p className="text-[10px] text-slate-400 mt-2 italic px-1 text-center">*Maksimal ukuran file: 50MB (Format: .mp4)</p>
                  </TabsContent>
                </Tabs>
              </div>
            )}
          </div>

          <DialogFooter className="gap-2 sm:gap-0">
            <Button onClick={() => setIsDialogOpen(false)} variant="outline" className="rounded-xl flex-1 sm:flex-none">Batal</Button>
            <Button onClick={() => { setIsDialogOpen(false); toast.success("Konten berhasil ditambah (Dummy)"); }} className="rounded-xl bg-brand-primary flex-1 sm:flex-none">
              Simpan {contentType === "foto" ? "Foto" : "Video"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
