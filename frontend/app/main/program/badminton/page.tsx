import PageBreadcrumb from "@/components/layout/PageBreadcrumb";
import PageHero from "@/components/shared/PageHero";
import RevealOnScroll from "@/components/animations/RevealOnScroll";

export default function BadmintonPage() {
  return (
    <main className="bg-white min-h-screen">
      <PageHero title="Badminton" imageUrl="https://images.unsplash.com/photo-1521537634582-7cb0237d70b5?q=80&w=1920&auto=format&fit=crop" alt="Badminton" />
      <PageBreadcrumb items={[{ label: "Home", href: "/" }, { label: "Ekskul", href: "/main/program" }, { label: "Badminton" }]} />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <RevealOnScroll as="section" direction="up" className="text-gray-700">
          <RevealOnScroll as="h2" direction="up" className="text-red-700 font-bold text-2xl mb-3">
            Ekstrakurikuler Badminton
          </RevealOnScroll>
          <RevealOnScroll direction="up" delayClassName="delay-100" className="mb-6">
            <hr className="border-gray-300" />
          </RevealOnScroll>
          <RevealOnScroll as="div" direction="up" delayClassName="delay-200">
            <p className="mb-4">
              Ekstrakurikuler badminton di SMANSA adalah wadah bagi siswa untuk menyalurkan minat dan bakat mereka di cabang olahraga yang sangat populer di Indonesia ini. Kami memiliki fasilitas lapangan yang memadai dan pelatih berpengalaman yang siap membimbing para siswa, baik yang baru memulai maupun yang sudah memiliki dasar bermain.
            </p>
            <p className="mb-4">
              Latihan rutin diadakan setiap minggu, fokus pada pengembangan teknik dasar seperti pukulan, gerak kaki, dan strategi bermain. Selain itu, kami juga mengadakan pertandingan internal dan berpartisipasi dalam turnamen antar sekolah untuk mengasah kemampuan kompetitif dan mental juara para anggota.
            </p>
            <p>
              Bergabung dengan ekskul badminton tidak hanya meningkatkan kebugaran fisik, tetapi juga membangun karakter, sportivitas, dan kerja sama tim.
            </p>
          </RevealOnScroll>
        </RevealOnScroll>
      </div>
    </main>
  );
}
