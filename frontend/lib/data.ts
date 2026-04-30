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
      { title: "Guru & Staff", href: "/main/guru-staf"},
      { title: "Berita Terbaru", href: "/main/berita" },

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
    title: "Galeri",
    href: "/main/galeri",
    subItems: [
      { title: "Dokumentasi Kegiatan", href: "/main/galeri/dokumentasi" },
      { title: "Video Kegiatan", href: "/main/galeri/video" },
    ],
  },
  {
    title: "Ekskul",
    href: "/main/ekskul",
  },
  {
    title: "Hubungi Kami",
    href: "/main/hubungi-kami",
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
//data bagian page ekskul
export const ekskulList = [
  {
    slug: "badminton",
    title: "Badminton",
    href: "/main/ekskul/badminton",
    description: "Asah kemampuanmu di lapangan dan jadilah juara bersama tim badminton SMANSA.",
    image: "https://images.unsplash.com/photo-1521537634582-7cb0237d70b5?q=80&w=600&auto=format&fit=crop",
    content: "Ekstrakurikuler badminton di SMANSA adalah wadah bagi siswa untuk menyalurkan minat dan bakat mereka di cabang olahraga yang sangat populer di Indonesia ini. Kami memiliki fasilitas lapangan yang memadai dan pelatih berpengalaman yang siap membimbing para siswa.",
    schedule: "Selasa & Kamis, 15:30 - 17:30",
    coach: "Bpk. Andi Setiawan, S.Pd.",
  },
  {
    slug: "paskibra",
    title: "Paskibra",
    href: "/main/ekskul/paskibra",
    description: "Bentuk kedisiplinan, kepemimpinan, dan cinta tanah air melalui baris-berbaris.",
    image: "https://images.unsplash.com/photo-1588392382834-a891154bca4d?q=80&w=600&auto=format&fit=crop",
    content: "Paskibra SMANSA bukan sekadar latihan baris-berbaris. Di sini, siswa ditempa untuk memiliki kedisiplinan tinggi, semangat patriotisme, dan kemampuan kepemimpinan yang tangguh.",
    schedule: "Rabu & Sabtu, 15:00 - 17:00",
    coach: "Ibu Siti Aminah, S.Pd.",
  },
  {
    slug: "pramuka",
    title: "Pramuka",
    description: "Belajar kemandirian, kerja sama, dan keterampilan bertahan hidup di alam terbuka.",
    href: "/main/ekskul/pramuka",
    image: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?q=80&w=600&auto=format&fit=crop",
    content: "Gerakan Pramuka SMANSA aktif dalam berbagai kegiatan kepanduan, mulai dari perkemahan, survival skill, hingga pengabdian masyarakat.",
    schedule: "Jumat, 14:00 - 16:30",
    coach: "Bpk. Kurniawan, M.Pd.",
  },
  {
    slug: "seni-tari",
    title: "Seni Tari & Musik",
    description: "Ekspresikan dirimu melalui alunan musik dan gerak tari tradisional maupun modern.",
    href: "/main/ekskul/seni-tari",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=600&auto=format&fit=crop",
    content: "Wadah bagi para seniman muda SMANSA untuk mengeksplorasi kreativitas dalam seni tari tradisional, modern dance, hingga ansambel musik.",
    schedule: "Senin & Rabu, 15:30 - 17:30",
    coach: "Ibu Maya Sari, S.Sn.",
  },
];

// Data Galeri
export const galleryData = {
  dokumentasi: [
    { title: "Upacara Hari Guru", date: "25 Nov 2023", image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop" },
    { title: "Lomba HUT RI", date: "17 Agu 2023", image: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&w=800&auto=format&fit=crop" },
    { title: "Pentas Seni Smansa", date: "10 Okt 2023", image: "https://images.unsplash.com/photo-1514525253344-99a42994a438?q=80&w=800&auto=format&fit=crop" },
    { title: "Kegiatan Bakti Sosial", date: "05 Des 2023", image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop" },
  ],
  videos: [
    { title: "Profile SMAN 1 Bangunrejo", date: "2023", youtubeId: "dQw4w9WgXcQ" },
    { title: "Highlight HUT Ke-30", date: "2023", youtubeId: "dQw4w9WgXcQ" },
  ]
};
