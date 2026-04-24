import PageBreadcrumb from "@/components/layout/PageBreadcrumb";
import PageHero from "@/components/shared/PageHero";
import RevealOnScroll from "@/components/animations/RevealOnScroll";

export default function SeniTariPage() {
  return (
    <main className="bg-white min-h-screen">
      <PageHero title="Seni Tari & Musik" imageUrl="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1920&auto=format&fit=crop" alt="Seni Tari & Musik" />
      <PageBreadcrumb items={[{ label: "Home", href: "/" }, { label: "Ekskul", href: "/main/ekskul" }, { label: "Seni Tari & Musik" }]} />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <RevealOnScroll as="section" direction="up" className="text-gray-700">
          <RevealOnScroll as="h2" direction="up" className="text-red-700 font-bold text-2xl mb-3">
            Bidang Seni Tari & Musik
          </RevealOnScroll>
          <RevealOnScroll direction="up" delayClassName="delay-100" className="mb-6">
            <hr className="border-gray-300" />
          </RevealOnScroll>
          <RevealOnScroll as="div" direction="up" delayClassName="delay-200">
            <p className="mb-4">
              SMANSA memiliki komitmen kuat untuk mengembangkan potensi siswa di bidang seni tari & musik. Kami percaya bahwa aktivitas kreatif adalah bagian penting dari pendidikan yang seimbang, membantu siswa menjadi pribadi yang sehat, disiplin,
              dan berjiwa artistik.
            </p>
            <p className="mb-4">Kami menawarkan berbagai macam cabang seni tari & musik yang dapat dipilih siswa sesuai minat dan bakat mereka, di antaranya:</p>
            <ul className="list-disc list-inside mb-4 pl-4">
              <li>Tari Tradisional</li>
              <li>Tari Kontemporer</li>
              <li>Instrumental</li>
              <li>Vokal</li>
              <li>Dan masih banyak lagi...</li>
            </ul>
            <p>Setiap cabang seni tari & musik didukung oleh pelatih profesional dan fasilitas yang memadai. Kami secara rutin mengikuti kompetisi di tingkat regional dan nasional untuk memberikan pengalaman berharga bagi para atlet sekolah.</p>
          </RevealOnScroll>
        </RevealOnScroll>
      </div>
    </main>
  );
}
