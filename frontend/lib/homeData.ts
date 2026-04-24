import type { HeroSlide, SchoolStatConfig } from "@/types/home";

// Homepage hero carousel content.
export const heroSlides: HeroSlide[] = [
  {
    imageUrl: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1920&auto=format&fit=crop",
    alt: "SMA Negeri 1 - Gedung",
    title: "Selamat Datang di SMA N 1 Bangunrejo",
    subtitle: "Membentuk Generasi Cerdas dan Berkarakter",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1920&auto=format&fit=crop",
    alt: "SMA Negeri 1 - Belajar",
    title: "Fasilitas Modern & Terlengkap",
    subtitle: "Mendukung Proses Belajar Mengajar secara Optimal",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1525926476840-ae73041fb8fa?q=80&w=1920&auto=format&fit=crop",
    alt: "SMA Negeri 1 - Ekskul",
    title: "Raih Prestasi Bersama Kami",
    subtitle: "Beragam Pilihan Ekstrakurikuler Unggulan",
  },
];

// Homepage stats content using icon keys to keep this file presentation-agnostic.
export const schoolStatsConfig: SchoolStatConfig[] = [
  { label: "Total Siswa", value: 557, iconKey: "students" },
  { label: "Guru & Tendik", value: 49, iconKey: "teachers" },
  { label: "Program Studi", value: 4, iconKey: "programs" },
  { label: "Total Alumni", value: 642, iconKey: "alumni" },
];
