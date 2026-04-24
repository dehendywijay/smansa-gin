import Footer from "@/components/layout/footer";
import Sidebar from "@/components/news/SideNews";
import RevealOnScroll from "@/components/animations/RevealOnScroll";
import PageBreadcrumb from "@/components/layout/PageBreadcrumb";
import PageHero from "@/components/shared/PageHero";

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen">
      <PageHero title="Contact Us" imageUrl="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1920&auto=format&fit=crop" alt="Hubungi Kami" />
      <PageBreadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]} />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl mx-auto px-6 py-10">
        {/* Seluruh blok kontak & FAQ memakai animasi reusable agar konsisten lintas halaman. */}
        <RevealOnScroll as="section" direction="up" rootMargin="0px 0px -10% 0px" className="md:col-span-3 text-gray-700">
          <RevealOnScroll as="h2" direction="up" className="text-red-700 font-bold text-2xl mb-3">
            Hubungi SMA N 1 Bangunrejo
          </RevealOnScroll>
          <RevealOnScroll direction="up" delayClassName="delay-100" className="mb-6">
            <hr className="border-gray-300" />
          </RevealOnScroll>

          <div className="grid sm:grid-cols-2 gap-5 mb-8">
            <RevealOnScroll direction="up" delayClassName="delay-150" className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold mb-2">Alamat</h3>
              <p className="text-sm text-gray-600">Jl. Raya Sidorejo, Kec. Bangunrejo, Kab. Lampung Tengah</p>
            </RevealOnScroll>
            <RevealOnScroll direction="up" delayClassName="delay-200" className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold mb-2">Telepon</h3>
              <p className="text-sm text-gray-600">(0721) 123456</p>
            </RevealOnScroll>
            <RevealOnScroll direction="up" delayClassName="delay-300" className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-sm text-gray-600">info@sman1bangunrejo.sch.id</p>
            </RevealOnScroll>
            <RevealOnScroll direction="up" delayClassName="delay-[380ms]" className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-bold mb-2">Jam Layanan</h3>
              <p className="text-sm text-gray-600">Senin - Jumat, 07.00 - 15.00 WIB</p>
            </RevealOnScroll>
          </div>

          <RevealOnScroll as="h3" direction="up" delayClassName="delay-[420ms]" className="text-xl font-bold mb-4">
            Pertanyaan Umum (FAQ)
          </RevealOnScroll>
          <div className="space-y-3 text-sm text-gray-600">
            <RevealOnScroll as="p" direction="up" delayClassName="delay-[460ms]">
              <strong>Bagaimana cara mendaftar peserta didik baru?</strong>
              <br />
              Silakan kunjungi menu PPDB atau hubungi panitia melalui kontak sekolah.
            </RevealOnScroll>
            <RevealOnScroll as="p" direction="up" delayClassName="delay-[520ms]">
              <strong>Bagaimana menghubungi wali kelas?</strong>
              <br />
              Orang tua dapat menghubungi administrasi sekolah untuk diarahkan ke wali kelas terkait.
            </RevealOnScroll>
            <RevealOnScroll as="p" direction="up" delayClassName="delay-[580ms]">
              <strong>Apakah sekolah menerima kunjungan studi?</strong>
              <br />
              Ya, silakan kirim surat resmi dan jadwal kunjungan ke email sekolah.
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
