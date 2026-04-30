import Sidebar from "@/components/news/SideNews";
import RevealOnScroll from "@/components/animations/RevealOnScroll";
import PageHero from "@/components/shared/PageHero";
import { 
  Users2, 
  GraduationCap, 
  Briefcase, 
  Handshake, 
  Award,
  BookOpenCheck
} from "lucide-react";

export default function AlumniPage() {
  const alumniPrograms = [
    {
      title: "Program Mentoring",
      description: "Alumni mendampingi siswa kelas akhir dalam persiapan kuliah dan dunia kerja.",
      icon: Users2,
    },
    {
      title: "Tracer Study",
      description: "Pendataan lulusan untuk evaluasi kurikulum dan peningkatan kualitas pembelajaran.",
      icon: BookOpenCheck,
    },
    {
      title: "Career Talk",
      description: "Sesi berbagi pengalaman karier dari alumni di berbagai bidang profesi.",
      icon: Briefcase,
    },
    {
      title: "Dukungan Beasiswa",
      description: "Program kolaboratif alumni untuk mendukung siswa berprestasi.",
      icon: Award,
    },
  ];

  return (
    <main className="bg-white min-h-screen">
      <PageHero 
        title="Alumni" 
        imageUrl="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1920&auto=format&fit=crop" 
        alt="Alumni"
        breadcrumbs={[{ label: "Alumni" }]}
      />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
          {/* Main Content */}
          <section className="lg:col-span-3 space-y-12">
            <RevealOnScroll direction="up" className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-brand-surface-alt border border-brand-primary/10">
                <Handshake size={16} className="text-brand-primary" />
                <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">Jejaring Alumni</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-slate-900 leading-tight">
                Membangun Sinergi <br />
                <span className="text-brand-primary">Lintas Generasi</span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                <p>
                  Halaman alumni menjadi ruang untuk mempererat jejaring lintas angkatan, berbagi pengalaman, serta membuka peluang kolaborasi bagi siswa aktif dan lulusan. Kami percaya bahwa kesuksesan alumni adalah cermin keberhasilan pendidikan di SMAN 1 Bangunrejo.
                </p>
                <p>
                  Kami mendorong alumni untuk berkontribusi melalui program mentoring, seminar karier, beasiswa, dan dukungan pengembangan sekolah. Mari kita bersinergi demi masa depan generasi bangsa yang unggul.
                </p>
              </div>
            </RevealOnScroll>

            {/* Programs Grid */}
            <div className="grid sm:grid-cols-2 gap-8 pt-8">
              {alumniPrograms.map((program, index) => (
                <RevealOnScroll 
                  key={index} 
                  direction="up" 
                  delayClassName={`delay-${index * 100}`}
                  className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-500"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                    <program.icon size={28} />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-slate-900 mb-3">
                    {program.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {program.description}
                  </p>
                </RevealOnScroll>
              ))}
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
