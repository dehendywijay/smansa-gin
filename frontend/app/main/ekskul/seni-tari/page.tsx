import Sidebar from "@/components/news/SideNews";
import RevealOnScroll from "@/components/animations/RevealOnScroll";
import PageHero from "@/components/shared/PageHero";
import { Calendar, User, Info, Trophy } from "lucide-react";
import Image from "next/image";

export default function SeniMusikPage() {
  const data = {
    title: "Seni Tari & Musik",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1920&auto=format&fit=crop",
    content: "Wadah bagi para seniman muda SMANSA untuk mengeksplorasi kreativitas dalam seni tari tradisional, modern dance, hingga ansambel musik.",
    schedule: "Senin & Rabu, 15:30 - 17:30",
    coach: "Ibu Maya Sari, S.Sn.",
  };

  return (
    <main className="bg-white min-h-screen">
      <PageHero 
        title={data.title} 
        imageUrl={data.image} 
        alt={data.title}
        breadcrumbs={[{ label: "Ekskul", href: "/main/ekskul" }, { label: data.title }]}
      />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
          <section className="lg:col-span-3 space-y-12">
            <RevealOnScroll direction="up" className="space-y-8">
              <div className="relative aspect-video rounded-[40px] overflow-hidden shadow-2xl">
                <Image src={data.image} alt={data.title} fill className="object-cover" />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-3xl bg-brand-surface-alt border border-brand-primary/10 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-primary shrink-0">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Jadwal Latihan</p>
                    <p className="text-slate-900 font-bold">{data.schedule}</p>
                  </div>
                </div>
                <div className="p-6 rounded-3xl bg-amber-50 border border-amber-200/50 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-amber-600 shrink-0">
                    <User size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Pembina / Pelatih</p>
                    <p className="text-slate-900 font-bold">{data.coach}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200">
                  <Info size={16} className="text-brand-primary" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-600">Tentang Ekskul</span>
                </div>
                <h2 className="text-3xl font-heading font-extrabold text-slate-900">
                  Mengembangkan Potensi Melalui <span className="text-brand-primary">{data.title}</span>
                </h2>
                <div className="prose prose-lg prose-slate max-w-none text-slate-600 leading-relaxed">
                  <p>{data.content}</p>
                </div>
              </div>

              <div className="p-10 rounded-[40px] bg-slate-900 text-white space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6">
                    <Trophy size={16} className="text-brand-accent" />
                    <span className="text-xs font-bold uppercase tracking-wider">Prestasi Terbaru</span>
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-4">Mencetak Generasi Juara</h3>
                  <p className="text-slate-400 max-w-2xl leading-relaxed">
                    Ekskul {data.title} SMAN 1 Bangunrejo telah berhasil meraih berbagai penghargaan di tingkat kabupaten maupun provinsi dalam kurun waktu terakhir.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </section>
          <aside className="lg:col-span-1">
            <RevealOnScroll direction="left" delayClassName="delay-300">
              <Sidebar />
            </RevealOnScroll>
          </aside>
        </div>
      </div>
    </main>
  );
}
