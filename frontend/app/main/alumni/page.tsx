import Sidebar from "@/components/news/SideNews";
import Footer from "@/components/layout/footer";
import RevealOnScroll from "@/components/animations/RevealOnScroll";
import PageBreadcrumb from "@/components/layout/PageBreadcrumb";
import PageHero from "@/components/shared/PageHero";

export default function AlumniPage() {
  return (
    <main className="bg-white min-h-screen">
      <PageHero title="Alumni" imageUrl="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1920&auto=format&fit=crop" alt="Alumni" />
      <PageBreadcrumb items={[{ label: "Home", href: "/" }, { label: "Alumni" }]} />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl mx-auto px-6 py-10">
        {/* Blok konten alumni dianimasikan bertahap agar tidak kaku saat scroll. */}
        <RevealOnScroll as="section" direction="up" rootMargin="0px 0px -10% 0px" className="md:col-span-3 text-gray-700">
          <RevealOnScroll as="h2" direction="up" className="text-red-700 font-bold text-2xl mb-3">
            Komunitas Alumni SMA N 1 Bangunrejo
          </RevealOnScroll>
          <RevealOnScroll direction="up" delayClassName="delay-100" className="mb-5">
            <hr className="border-gray-300" />
          </RevealOnScroll>
          <RevealOnScroll as="p" direction="up" delayClassName="delay-150" className="mb-4 leading-relaxed">
            Halaman alumni menjadi ruang untuk mempererat jejaring lintas angkatan, berbagi pengalaman, serta membuka peluang kolaborasi bagi siswa aktif dan lulusan.
          </RevealOnScroll>
          <RevealOnScroll as="p" direction="up" delayClassName="delay-200" className="mb-6 leading-relaxed">
            Kami mendorong alumni untuk berkontribusi melalui program mentoring, seminar karier, beasiswa, dan dukungan pengembangan sekolah.
          </RevealOnScroll>

          <div className="grid sm:grid-cols-2 gap-5">
            <RevealOnScroll direction="up" delayClassName="delay-200" className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-lg mb-2">Program Mentoring</h3>
              <p className="text-sm text-gray-600">Alumni mendampingi siswa kelas akhir dalam persiapan kuliah dan dunia kerja.</p>
            </RevealOnScroll>
            <RevealOnScroll direction="up" delayClassName="delay-300" className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-lg mb-2">Tracer Study</h3>
              <p className="text-sm text-gray-600">Pendataan lulusan untuk evaluasi kurikulum dan peningkatan kualitas pembelajaran.</p>
            </RevealOnScroll>
            <RevealOnScroll direction="up" delayClassName="delay-[380ms]" className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-lg mb-2">Career Talk</h3>
              <p className="text-sm text-gray-600">Sesi berbagi pengalaman karier dari alumni di berbagai bidang profesi.</p>
            </RevealOnScroll>
            <RevealOnScroll direction="up" delayClassName="delay-[460ms]" className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold text-lg mb-2">Dukungan Beasiswa</h3>
              <p className="text-sm text-gray-600">Program kolaboratif alumni untuk mendukung siswa berprestasi.</p>
            </RevealOnScroll>
          </div>
        </RevealOnScroll>

        <RevealOnScroll as="div" direction="up" delayClassName="delay-150" rootMargin="0px 0px -10% 0px">
          <Sidebar />
        </RevealOnScroll>
      </div>
    </main>
  );
}
