import PageBreadcrumb from "@/components/layout/PageBreadcrumb";
import PageHero from "@/components/shared/PageHero";
import RevealOnScroll from "@/components/animations/RevealOnScroll";

export default function PramukaPage() {
  return (
    <main className="bg-white min-h-screen">
      <PageHero title="Pramuka" imageUrl="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1920&auto=format&fit=crop" alt="Pramuka" />
      <PageBreadcrumb items={[{ label: "Home", href: "/" }, { label: "Ekskul", href: "/main/ekskul" }, { label: "Pramuka" }]} />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <RevealOnScroll as="section" direction="up" className="text-gray-700">
          <RevealOnScroll as="h2" direction="up" className="text-red-700 font-bold text-2xl mb-3">
            Pramuka
          </RevealOnScroll>
          <RevealOnScroll direction="up" delayClassName="delay-100" className="mb-6">
            <hr className="border-gray-300" />
          </RevealOnScroll>
          <RevealOnScroll as="div" direction="up" delayClassName="delay-200">
            <p className="mb-4">
              SMANSA memiliki komitmen kuat untuk mengembangkan potensi siswa di bidang pramuka. Kami percaya bahwa aktivitas fisik adalah bagian penting dari pendidikan yang seimbang, membantu siswa menjadi pribadi yang sehat, disiplin,
              dan berjiwa sportif.
            </p>
            <p className="mb-4">Kami menawarkan berbagai macam cabang pramuka yang dapat dipilih siswa sesuai minat dan bakat mereka, di antaranya:</p>
            <ul className="list-disc list-inside mb-4 pl-4">
              <li>Scout</li>
              <li>Guide</li>
              <li>Andraian</li>
              <li>Dan masih banyak lagi...</li>
            </ul>
            <p>Setiap cabang pramuka didukung oleh pelatih profesional dan fasilitas yang memadai. Kami secara rutin mengikuti kompetisi di tingkat regional dan nasional untuk memberikan pengalaman berharga bagi para atlet sekolah.</p>
          </RevealOnScroll>
        </RevealOnScroll>
      </div>
    </main>
  );
}
