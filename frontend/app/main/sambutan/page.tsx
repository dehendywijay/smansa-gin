import Sidebar from "@/components/news/SideNews";
import Footer from "@/components/layout/footer";
import RevealOnScroll from "@/components/animations/RevealOnScroll";
import PageBreadcrumb from "@/components/layout/PageBreadcrumb";
import PageHero from "@/components/shared/PageHero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <PageHero title="Sambutan Kepala Sekolah" imageUrl="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1920&auto=format&fit=crop" alt="Sambutan" />
      <PageBreadcrumb items={[{ label: "Home", href: "/" }, { label: "Sambutan Kepala Sekolah" }]} />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl mx-auto px-6 py-10">
        <section className="md:col-span-3">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Foto kepala sekolah: masuk dari kiri agar fokus visual muncul lebih dulu. */}
            <RevealOnScroll direction="left" rootMargin="0px 0px -12% 0px" className="relative w-52 h-52 md:w-64 md:h-64 shrink-0 mx-auto md:mx-0">
              <div className="absolute inset-0 rounded-full border-8 border-red-800"></div>
              <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&auto=format&fit=crop" alt="Kepala Sekolah" fill className="rounded-full object-cover relative z-10" />
            </RevealOnScroll>

            {/* Blok konten utama: masuk dari kanan, lalu isi di dalamnya muncul bertahap (stagger). */}
            <RevealOnScroll direction="right" rootMargin="0px 0px -12% 0px" delayClassName="delay-100" className="text-gray-700 leading-relaxed">
              <RevealOnScroll as="h2" direction="up" delayClassName="delay-150" className="text-red-700 font-bold text-2xl mb-3">
                SAMBUTAN KEPALA SEKOLAH
              </RevealOnScroll>
              <RevealOnScroll direction="up" delayClassName="delay-200" className="mb-5">
                <hr className="border-gray-300" />
              </RevealOnScroll>
              <RevealOnScroll as="p" direction="up" delayClassName="delay-200" className="mb-4">
                Selamat datang di website resmi <strong>SMA N 1 Bangunrejo</strong>. Website ini kami hadirkan sebagai media informasi, komunikasi, dan kolaborasi bagi siswa, guru, orang tua, alumni, serta masyarakat luas.
              </RevealOnScroll>
              <RevealOnScroll as="p" direction="up" delayClassName="delay-300" className="mb-4">
                Kami berkomitmen membangun lingkungan belajar yang unggul dalam prestasi akademik, kuat dalam karakter, dan adaptif terhadap perkembangan teknologi. Melalui platform ini, kami ingin menghadirkan informasi sekolah yang lebih
                cepat, terbuka, dan bermanfaat.
              </RevealOnScroll>
              <RevealOnScroll as="p" direction="up" delayClassName="delay-[420ms]" className="mb-6">
                Semoga kehadiran website ini dapat mempererat sinergi seluruh warga sekolah dan menjadi sarana positif untuk mendorong kemajuan pendidikan di SMA N 1 Bangunrejo.
              </RevealOnScroll>
              <RevealOnScroll as="p" direction="up" delayClassName="delay-[520ms]" className="font-semibold">
                Kepala Sekolah SMA N 1 Bangunrejo
                <br />
                Henrican Purba, M.Pd.
              </RevealOnScroll>
            </RevealOnScroll>
          </div>
        </section>

        {/* Sidebar ikut muncul halus agar ritme halaman tetap konsisten. */}
        <RevealOnScroll as="div" direction="up" delayClassName="delay-150" rootMargin="0px 0px -12% 0px">
          <Sidebar />
        </RevealOnScroll>
      </div>
    </main>
  );
}
