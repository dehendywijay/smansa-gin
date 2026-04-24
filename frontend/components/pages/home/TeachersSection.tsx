import RevealOnScroll from "@/components/animations/RevealOnScroll";

export default function TeachersSection() {
  return (
    <section className="text-center pt-12 md:pt-16 pb-8 md:pb-12 px-6 gap-1">
      <RevealOnScroll direction="up" className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Guru & Tenaga Kependidikan</h2>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed">SMA Negeri 1 Bangunrejo didukung oleh 48 guru profesional dan bersertifikasi serta 12 tenaga kependidikan yang berdedikasi tinggi.</p>
      </RevealOnScroll>
    </section>
  );
}
