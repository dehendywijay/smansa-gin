"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import TextEditor from "../text-editor";

type EskulFormDialogProps = {
  open: boolean;
  isEdit: boolean;
  nama: string;
  pembina: string;
  tujuan: string;
  prestasi: string;
  jadwal: string;
  onOpenChange: (open: boolean) => void;
  onSubmit: (e: React.FormEvent) => void;
  onNamaChange: (value: string) => void;
  onPembinaChange: (value: string) => void;
  onTujuanChange: (value: string) => void;
  onPrestasiChange: (value: string) => void;
  onJadwalChange: (value: string) => void;
  onFotoChange: (file: File | null) => void;
};

export default function EskulFormDialog({
  open,
  isEdit,
  nama,
  pembina,
  tujuan,
  prestasi,
  jadwal,
  onOpenChange,
  onSubmit,
  onNamaChange,
  onPembinaChange,
  onTujuanChange,
  onPrestasiChange,
  onJadwalChange,
  onFotoChange,
}: EskulFormDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md rounded-[32px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            {isEdit ? "Edit Eskul" : "Tambah Eskul"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={onSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder="Masukkan Nama Eskul..."
            value={nama}
            onChange={(e) => onNamaChange(e.target.value)}
          />

          <Input
            type="text"
            placeholder="Masukkan Pembina..."
            value={pembina}
            onChange={(e) => onPembinaChange(e.target.value)}
          />

          <TextEditor value={tujuan} onChange={onTujuanChange} />

          <TextEditor value={prestasi} onChange={onPrestasiChange} />

          <Input
            type="text"
            placeholder="Masukkan Jadwal..."
            value={jadwal}
            onChange={(e) => onJadwalChange(e.target.value)}
          />

          <Input
            type="file"
            onChange={(e) => onFotoChange(e.target.files?.[0] || null)}
          />

          <DialogFooter>
            <Button
              type="button"
              onClick={() => onOpenChange(false)}
              variant="outline"
            >
              Batal
            </Button>

            <Button type="submit" className="bg-brand-primary">
              {isEdit ? "Update" : "Simpan"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
