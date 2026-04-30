import RevealOnScroll from "@/components/animations/RevealOnScroll";
import PageHero from "@/components/shared/PageHero";
import { galleryData } from "@/lib/data";
import Image from "next/image";
import { Calendar } from "lucide-react";

export default function DokumentasiPage() {
  return (
    <main className="bg-white min-h-screen">
      <PageHero 
        title="Dokumentasi Kegiatan" 
        imageUrl="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1920&auto=format&fit=crop" 
        alt="Dokumentasi"
        breadcrumbs={[{ label: "Galeri" }, { label: "Dokumentasi" }]}
      />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <RevealOnScroll direction="up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryData.dokumentasi.map((item, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-[32px] bg-slate-50 border border-slate-100 hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-brand-primary uppercase tracking-wider">
                  <Calendar size={14} />
                  {item.date}
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 group-hover:text-brand-primary transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </RevealOnScroll>
      </div>
    </main>
  );
}
