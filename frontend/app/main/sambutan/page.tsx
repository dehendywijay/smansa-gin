import Sidebar from "@/components/news/SideNews";
import RevealOnScroll from "@/components/animations/RevealOnScroll";
import PageHero from "@/components/shared/PageHero";
import Image from "next/image";
import { Quote } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <PageHero 
        title="Sambutan Kepala Sekolah" 
        imageUrl="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1920&auto=format&fit=crop" 
        alt="Sambutan"
        breadcrumbs={[{ label: "Sambutan" }]}
      />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
          <section className="lg:col-span-3 space-y-12">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              {/* Profile Image */}
              <RevealOnScroll direction="left" className="relative w-full max-w-[300px] aspect-[3/4] shrink-0">
                <div className="absolute -inset-4 border-2 border-brand-primary/20 rounded-3xl translate-x-4 translate-y-4 -z-10" />
                <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl">
                  <Image 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" 
                    alt="Kepala Sekolah" 
                    fill 
                    className="object-cover" 
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-brand-primary to-transparent text-white">
                    <p className="font-heading font-bold text-lg">Henrican Purba, M.Pd.</p>
                    <p className="text-xs uppercase tracking-widest text-white/80">Kepala Sekolah</p>
                  </div>
                </div>
              </RevealOnScroll>

              {/* Message Content */}
              <RevealOnScroll direction="right" className="flex-1 space-y-8">
                <div className="relative pl-10 border-l-4 border-brand-primary/20 italic text-xl text-slate-600 leading-relaxed">
                  <Quote className="absolute -left-2 -top-6 text-brand-primary/10 w-20 h-20 -z-10" />
                  <p>
                    "Kami berkomitmen membangun lingkungan belajar yang unggul dalam prestasi akademik, kuat dalam karakter, dan adaptif terhadap perkembangan teknologi."
                  </p>
                </div>

                <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                  <p>
                    Selamat datang di website resmi <strong>SMA Negeri 1 Bangunrejo</strong>. Website ini kami hadirkan sebagai media informasi, komunikasi, dan kolaborasi bagi seluruh warga sekolah serta masyarakat luas.
                  </p>
                  <p>
                    Melalui platform ini, kami ingin menghadirkan informasi sekolah yang lebih cepat, terbuka, dan bermanfaat. Kami percaya bahwa sinergi antara sekolah, orang tua, dan masyarakat adalah kunci utama dalam mencetak generasi masa depan yang luar biasa.
                  </p>
                  <p>
                    Terima kasih atas kunjungan Anda. Mari kita bersama-sama membangun masa depan pendidikan yang lebih baik bagi putra-putri bangsa.
                  </p>
                </div>

                <div className="pt-8">
                  <p className="font-heading font-bold text-slate-900 text-lg uppercase tracking-wider">Henrican Purba, M.Pd.</p>
                  <p className="text-brand-primary font-bold text-sm">Kepala Sekolah SMA N 1 Bangunrejo</p>
                </div>
              </RevealOnScroll>
            </div>
          </section>

          {/* Sidebar */}
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
