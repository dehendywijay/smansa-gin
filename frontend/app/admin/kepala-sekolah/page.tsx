"use client";

import { useState } from "react";
import { UserCheck, Save, Image as ImageIcon, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TextEditor from "@/components/text-editor";
import { toast } from "sonner";

export default function AdminKepalaSekolahPage() {
  const [name, setName] = useState("Drs. Ahmad Sudrajat, M.Pd.");
  const [content, setContent] = useState("<p>Assalamu'alaikum Warahmatullahi Wabarakatuh,</p><p>Selamat datang di website resmi SMA Negeri 1 Bangunrejo...</p>");
  const [imagePreview, setImagePreview] = useState("https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop");

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Data Kepala Sekolah berhasil disimpan! (Dummy)");
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImagePreview(url);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold flex items-center gap-2 text-slate-800">
          <UserCheck className="text-brand-primary" /> Pengaturan Kepala Sekolah
        </h1>
      </div>

      <form onSubmit={handleSave} className="space-y-6 bg-white p-6 md:p-8 rounded-[32px] border border-slate-100 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Photo Section */}
          <div className="space-y-4">
            <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider">Foto Profil</label>
            <div className="relative group aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100 border-2 border-dashed border-slate-200 flex items-center justify-center">
              {imagePreview ? (
                <>
                  <img src={imagePreview} alt="Kepala Sekolah" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <label className="cursor-pointer bg-white text-slate-900 px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2">
                      <Upload size={14} /> Ganti Foto
                      <input type="file" className="hidden" onChange={handleImageChange} accept="image/*" />
                    </label>
                  </div>
                </>
              ) : (
                <div className="text-center p-4">
                  <ImageIcon size={40} className="mx-auto text-slate-300 mb-2" />
                  <p className="text-xs text-slate-400">Pilih foto Kepala Sekolah</p>
                  <input type="file" className="hidden" onChange={handleImageChange} accept="image/*" />
                </div>
              )}
            </div>
          </div>

          {/* Details Section */}
          <div className="md:col-span-2 space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider">Nama Lengkap</label>
              <Input 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Masukkan nama lengkap beserta gelar..."
                className="rounded-xl border-slate-200 focus:ring-brand-primary/20"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider">Sambutan Kepala Sekolah</label>
              <div className="min-h-[300px]">
                <TextEditor value={content} onChange={setContent} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-4 border-t border-slate-100">
          <Button type="submit" className="rounded-xl px-8 bg-brand-primary hover:bg-brand-primary/90 flex items-center gap-2">
            <Save size={18} /> Simpan Perubahan
          </Button>
        </div>
      </form>
    </div>
  );
}
