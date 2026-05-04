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
  nama: string;
  jabatan: string;
  nip: string;
  foto: string;
};

export type Eskul = {
  ID: number;
  nama: string;
  tujuan: string;
  foto: string;
  pembina: string;
  jadwal: string;
  prestasi: string;
  slug: string;
};
