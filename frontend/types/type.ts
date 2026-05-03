export type MenuItem = {
  title: string;
  href: string;
  subItems?: MenuSubItem[];
};

export type MenuSubItem = {
  title: string;
  href: string;
};

export type News = {
  ID: number;
  title: string;
  thumbnail: string;
  imgUrl: string;
  content: string;
  category: string;
  status: "published" | "draft";
  CreatedAt: string | Date;
  UpdatedAt: string | Date;
  slug : string;
};

export type Guru = {
  ID: number;
  Nama: string;
  Jabatan: string;
  Nip: string;
  Foto: string;
};

export type Eskul = {
  ID: number;
  Nama: string;
  Deskripsi: string;
  Foto: string;
  Pembina: string;
  Jadwal: string;
  Prestasi: string;
};
