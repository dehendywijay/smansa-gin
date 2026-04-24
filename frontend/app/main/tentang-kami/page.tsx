import PageBreadcrumb from "@/components/layout/PageBreadcrumb";
import PageHero from "@/components/shared/PageHero";
import RevealOnScroll from "@/components/animations/RevealOnScroll";
import { facilities } from "@/lib/data";

export default function TentangKamiPage() {
  return (
    <main className="bg-white min-h-screen">
      <PageHero title="Tentang Kami" imageUrl="https://images.unsplash.com/photo-1580582932707-520aed93a94d?q=80&w=1920&auto=format&fit=crop" alt="Tentang Kami" />
      <PageBreadcrumb items={[{ label: "Home", href: "/" }, { label: "Tentang Kami" }]} />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <RevealOnScroll as="section" direction="up" className="text-gray-700 mb-12">
          <RevealOnScroll as="h2" direction="up" className="text-red-700 font-bold text-2xl mb-3">
            Sejarah Singkat SMANSA
          </RevealOnScroll>
          <RevealOnScroll direction="up" delayClassName="delay-100" className="mb-6">
            <hr className="border-gray-300" />
          </RevealOnScroll>
          <RevealOnScroll as="div" direction="up" delayClassName="delay-200">
            <p className="mb-4">
              Berdiri sejak tahun 1980, SMAN 1 (SMANSA) telah menjadi salah satu pilar pendidikan di kota kami. Bermula dari sebuah bangunan sederhana, sekolah ini terus berkembang dan berinovasi untuk memberikan pendidikan berkualitas yang
              relevan dengan tantangan zaman.
            </p>
            <p>
              Dengan dedikasi para pendiri dan dukungan masyarakat, SMANSA telah melahirkan ribuan alumni yang berprestasi di berbagai bidang, baik di tingkat nasional maupun internasional. Kami bangga menjadi bagian dari perjalanan mereka
              dan akan terus berkomitmen untuk mencetak generasi penerus yang unggul dan berkarakter.
            </p>
          </RevealOnScroll>
        </RevealOnScroll>

        <RevealOnScroll as="section" direction="up" className="text-gray-700">
          <RevealOnScroll as="h2" direction="up" className="text-red-700 font-bold text-2xl mb-3">
            Fasilitas Sekolah
          </RevealOnScroll>
          <RevealOnScroll direction="up" delayClassName="delay-100" className="mb-6">
            <hr className="border-gray-300" />
          </RevealOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <RevealOnScroll as="div" key={facility.title} direction="up" className="border border-gray-200 rounded-lg p-5" style={{ transitionDelay: `${Math.min(index * 90, 360)}ms` }}>
                <h3 className="font-bold text-lg mb-2">{facility.title}</h3>
                <p className="text-sm text-gray-600">{facility.description}</p>
              </RevealOnScroll>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </main>
  );
}
