import RevealOnScroll from "@/components/animations/RevealOnScroll";
import PageHero from "@/components/shared/PageHero";
import Link from "next/link";
import { Camera, PlayCircle, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function GaleriPage() {
  const categories = [
    {
      title: "Dokumentasi Kegiatan",
      description: "Kumpulan foto-foto momen berharga dari berbagai kegiatan sekolah, upacara, dan perlombaan.",
      href: "/main/galeri/dokumentasi",
      icon: Camera,
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
      color: "bg-blue-600"
    },
    {
      title: "Video Kegiatan",
      description: "Tonton keseruan dan dokumentasi video dari acara-acara besar SMAN 1 Bangunrejo.",
      href: "/main/galeri/video",
      icon: PlayCircle,
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop",
      color: "bg-brand-primary"
    }
  ];

  return (
    <main className="bg-white min-h-screen">
      <PageHero 
        title="Galeri SMANSA" 
        imageUrl="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1920&auto=format&fit=crop" 
        alt="Galeri"
        breadcrumbs={[{ label: "Galeri" }]}
      />

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <RevealOnScroll direction="up">
            <h2 className="text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
              Melihat Lebih Dekat <span className="text-brand-primary">Kegiatan Kami</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Temukan berbagai momen inspiratif dan dokumentasi visual dari perjalanan prestasi serta kreativitas siswa SMAN 1 Bangunrejo.
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {categories.map((cat, index) => (
            <RevealOnScroll 
              key={index} 
              direction={index === 0 ? "right" : "left"}
              className="group"
            >
              <Link href={cat.href} className="block relative h-[450px] rounded-[40px] overflow-hidden shadow-2xl hover:shadow-brand-primary/20 transition-all duration-500">
                {/* Background Image */}
                <Image 
                  src={cat.image} 
                  alt={cat.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90" />
                
                {/* Content */}
                <div className="absolute inset-0 p-10 flex flex-col justify-end items-start text-white space-y-4">
                  <div className={`w-16 h-16 rounded-2xl ${cat.color} flex items-center justify-center shadow-lg mb-2`}>
                    <cat.icon size={32} />
                  </div>
                  <h3 className="text-3xl font-heading font-bold">{cat.title}</h3>
                  <p className="text-slate-200 text-lg max-w-sm line-clamp-2">
                    {cat.description}
                  </p>
                  <div className="flex items-center gap-2 font-bold text-white group-hover:gap-4 transition-all">
                    Jelajahi Sekarang <ArrowRight size={20} />
                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      {/* Stats/Info Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <RevealOnScroll direction="up" className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <p className="text-5xl font-heading font-black text-brand-primary mb-2">500+</p>
              <p className="font-bold text-slate-500 uppercase tracking-widest text-sm">Koleksi Foto</p>
            </div>
            <div>
              <p className="text-5xl font-heading font-black text-brand-primary mb-2">50+</p>
              <p className="font-bold text-slate-500 uppercase tracking-widest text-sm">Dokumentasi Video</p>
            </div>
            <div>
              <p className="text-5xl font-heading font-black text-brand-primary mb-2">100%</p>
              <p className="font-bold text-slate-500 uppercase tracking-widest text-sm">Momen Inspiratif</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
}
