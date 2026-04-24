import Image from "next/image";
import RevealOnScroll from "@/components/animations/RevealOnScroll";

export default function GreetingSection() {
  return (
    <section className="flex flex-col md:flex-row items-center md:items-start gap-10 max-w-6xl mx-auto p-6 mt-16 md:mt-40">
      {/* Foto dengan border dan dekorasi lingkaran */}
      <RevealOnScroll direction="left" rootMargin="0px 0px -10% 0px" className="relative w-48 h-48 md:w-64 md:h-64 shrink-0 mx-auto md:mx-0">
        {/* Border lingkaran besar */}
        <div className="absolute inset-0 rounded-full border-8 border-red-800"></div>

        {/* Foto lingkaran */}
        <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop" alt="Kepala Sekolah" fill className="rounded-full w-full h-full object-cover relative z-10" />

        {/* Dekorasi lingkaran kecil kiri atas */}
        <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-10 h-10 md:w-14 md:h-14 rounded-full border-4 border-red-800 bg-red-900 z-20"></div>

        {/* Dekorasi lingkaran kecil kanan bawah */}
        <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-10 h-10 md:w-14 md:h-14 rounded-full border-4 border-red-800 bg-red-900 z-20"></div>

        {/* Dekorasi lingkaran kecil kiri bawah */}
        <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-red-800 bg-red-700 z-20"></div>
      </RevealOnScroll>

      {/* Teks sambutan */}
      <RevealOnScroll direction="right" rootMargin="0px 0px -10% 0px" delayClassName="delay-150" className="flex-1 text-gray-700 text-center md:text-left">
        <h2 className="text-red-700 font-bold text-xl md:text-2xl mb-2">SAMBUTAN KEPALA SEKOLAH</h2>
        <hr className="border-gray-300 mb-4 mx-auto md:mx-0 w-24 md:w-full" />
        <p className="mb-4 text-sm md:text-base leading-relaxed">
          Selamat datang di website <strong>SMA N 1 BANGUNREJO</strong> yang saya tujukan untuk seluruh unsur pimpinan, guru, karyawan, siswa, serta masyarakat umum agar dapat mengakses berbagai informasi tentang sekolah kami.
        </p>
        <p className="mb-4 text-sm md:text-base leading-relaxed">
          Kami menyadari bahwa dalam penyajian informasi di website ini masih terdapat banyak kekurangan. Oleh karena itu, kami sangat terbuka terhadap saran dan kritik dari seluruh civitas akademika maupun masyarakat luas demi perbaikan
          dan kemajuan sekolah ke depannya.
        </p>
        <p className="mb-6 text-sm md:text-base leading-relaxed">
          Harapan saya, website ini dapat menjadi wahana interaksi yang positif, baik antar civitas akademika maupun dengan masyarakat pada umumnya, sehingga dapat mempererat jalinan silaturahmi di berbagai unsur. Mari kita bekerja dan
          berkarya dengan penuh keikhlasan serta mengharap ridho Tuhan Yang Maha Esa demi masa depan generasi bangsa.
        </p>
        <p className="font-semibold text-sm md:text-base">
          – LOREM
          <br />
          Kepala Sekolah SMA N 1 BANGUNREJO
        </p>
      </RevealOnScroll>
    </section>
  );
}
