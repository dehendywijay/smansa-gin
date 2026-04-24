import Sidebar from "@/components/news/SideNews";
import Footer from "@/components/layout/footer";
import RevealOnScroll from "@/components/animations/RevealOnScroll";
import PageBreadcrumb from "@/components/layout/PageBreadcrumb";
import PageHero from "@/components/shared/PageHero";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <PageHero title="Visi dan Misi" imageUrl="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1920&auto=format&fit=crop" alt="Visi Misi" />
      <PageBreadcrumb items={[{ label: "Home", href: "/" }, { label: "Visi dan Misi" }]} />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl mx-auto px-6 py-10">
        {/* Konten utama diberi animasi bertahap agar transisi lebih hidup di desktop dan mobile. */}
        <RevealOnScroll as="section" direction="up" rootMargin="0px 0px -10% 0px" className="md:col-span-3 text-gray-700 leading-relaxed">
          <RevealOnScroll as="h2" direction="up" className="text-red-700 font-bold text-2xl mb-3">
            VISI
          </RevealOnScroll>
          <RevealOnScroll direction="up" delayClassName="delay-100" className="mb-4">
            <hr className="border-gray-300" />
          </RevealOnScroll>
          <RevealOnScroll as="p" direction="up" delayClassName="delay-150" className="mb-8 text-lg">
            Terwujudnya insan yang berakhlak mulia, berprestasi, berbudaya, dan berwawasan lingkungan.
          </RevealOnScroll>

          <RevealOnScroll as="h2" direction="up" delayClassName="delay-200" className="text-red-700 font-bold text-2xl mb-3">
            MISI
          </RevealOnScroll>
          <RevealOnScroll direction="up" delayClassName="delay-300" className="mb-4">
            <hr className="border-gray-300" />
          </RevealOnScroll>
          <ul className="list-disc pl-6 space-y-3">
            <RevealOnScroll as="li" direction="up" delayClassName="delay-300">
              Memperkuat keimanan dan ketaqwaan kepada Tuhan Yang Maha Esa melalui pendidikan agama dan pembiasaan religius.
            </RevealOnScroll>
            <RevealOnScroll as="li" direction="up" delayClassName="delay-[380ms]">
              Meningkatkan prestasi akademik dan non-akademik melalui pembelajaran yang efektif dan pengembangan potensi peserta didik.
            </RevealOnScroll>
            <RevealOnScroll as="li" direction="up" delayClassName="delay-[460ms]">
              Mengembangkan budaya sekolah yang unggul, disiplin, dan berkarakter.
            </RevealOnScroll>
            <RevealOnScroll as="li" direction="up" delayClassName="delay-[540ms]">
              Mewujudkan lingkungan sekolah yang hijau, bersih, sehat, dan peduli lingkungan (Adiwiyata).
            </RevealOnScroll>
          </ul>

          <RevealOnScroll as="h3" direction="up" delayClassName="delay-[620ms]" className="text-red-700 font-bold text-xl mt-10 mb-3">
            Tujuan Sekolah
          </RevealOnScroll>
          <RevealOnScroll as="p" direction="up" delayClassName="delay-[680ms]">
            Menghasilkan lulusan yang beriman, berakhlak mulia, memiliki kecakapan akademik yang kuat, serta siap melanjutkan ke jenjang pendidikan tinggi maupun dunia kerja.
          </RevealOnScroll>
        </RevealOnScroll>

        <RevealOnScroll as="div" direction="up" delayClassName="delay-150" rootMargin="0px 0px -10% 0px">
          <Sidebar />
        </RevealOnScroll>
      </div>
    </main>
  );
}
