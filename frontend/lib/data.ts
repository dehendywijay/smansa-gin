import { MenuItem } from "@/types/type";

//data untuk menu navigasi
export const menuData: MenuItem[] = [
  {
    title: "Beranda",
    href: "/",
  },
  {
    title: "Tentang Kami",
    href: "/main/tentang-kami",
    subItems: [
      { title: "Profil Sekolah", href: "/main/tentang-kami" },
      { title: "Sambutan Kepala Sekolah", href: "/main/sambutan" },
      { title: "Visi & Misi", href: "/main/visi-misi" },
      { title: "Berita Terbaru", href: "/main/berita" },
      { title: "Alumni", href: "/main/alumni" },
    ],
  },
  {
    title: "Alumni",
    href: "/main/alumni",
    subItems: [
      { title: "Jejaring Alumni", href: "/main/alumni" },
      { title: "Program Karier", href: "/main/alumni" },
    ],
  },
  {
    title: "Ekskul",
    href: "/main/ekskul",
    subItems: [
      { title: "Badminton", href: "/main/ekskul/badminton" },
      { title: "Olahraga", href: "/main/ekskul/olahraga" },
      { title: "Paskibra", href: "/main/ekskul/paskibra" },
      { title: "Pramuka", href: "/main/ekskul/pramuka" },
      { title: "Seni Tari & Musik", href: "/main/ekskul/seni-tari" },
      { title: "KIR (Karya Ilmiah Remaja)", href: "/main/ekskul/karya-ilmiah-remaja" },
    ],
  },
  {
    title: "Hubungi Kami",
    href: "/main/hubungi-kami",
    subItems: [
      { title: "Kontak Sekolah", href: "/main/hubungi-kami" },
      { title: "FAQs", href: "/main/hubungi-kami" },
      { title: "Kirim Pertanyaan", href: "/main/hubungi-kami" },
    ],
  },
];

//data bagian page tentang-kami
export const facilities = [
  { title: "Laboratorium Modern", description: "Lab Kimia, Fisika, Biologi, dan Komputer dengan peralatan terkini." },
  { title: "Perpustakaan Digital", description: "Akses ke ribuan buku, jurnal, dan sumber belajar online." },
  { title: "Lapangan Olahraga", description: "Fasilitas lengkap untuk basket, voli, futsal, dan atletik." },
  { title: "Ruang Seni & Musik", description: "Studio kedap suara dan panggung pertunjukan untuk kreativitas siswa." },
  { title: "Kantin Sehat", description: "Menyediakan makanan bergizi dan higienis bagi seluruh warga sekolah." },
  { title: "Wi-Fi Area", description: "Akses internet kecepatan tinggi di seluruh area sekolah." },
];

//data bagian page ekskul
export const ekskulList = [
  {
    title: "Badminton",
    href: "/main/ekskul/badminton",
    description: "Asah kemampuanmu di lapangan dan jadilah juara bersama tim badminton SMANSA.",
    image: "https://images.unsplash.com/photo-1521537634582-7cb0237d70b5?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Olahraga Lainnya",
    href: "/main/ekskul/olahraga",
    description: "Temukan potensimu di berbagai cabang olahraga seperti basket, voli, dan futsal.",
    image: "https://images.unsplash.com/photo-1575052814086-c71a72209a26?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Paskibra",
    href: "#",
    description: "Bentuk kedisiplinan, kepemimpinan, dan cinta tanah air melalui baris-berbaris.",
    image: "https://images.unsplash.com/photo-1588392382834-a891154bca4d?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Pramuka",
    description: "Belajar kemandirian, kerja sama, dan keterampilan bertahan hidup di alam terbuka.",
    href: "#",
    image: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "KIR (Karya Ilmiah Remaja)",
    description: "Bagi kamu yang suka riset dan inovasi, KIR adalah tempat yang tepat untuk berkarya.",
    href: "#",
    image: "https://images.unsplash.com/photo-1532187643623-dbf2f5a7d8bd?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Seni Tari & Musik",
    description: "Ekspresikan dirimu melalui alunan musik dan gerak tari tradisional maupun modern.",
    href: "#",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=600&auto=format&fit=crop",
  },
];
