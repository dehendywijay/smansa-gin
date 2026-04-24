import PageBreadcrumb from "@/components/layout/PageBreadcrumb";
import PageHero from "@/components/shared/PageHero";
import RevealOnScroll from "@/components/animations/RevealOnScroll";
import Link from "next/link";
import { ekskulList } from "@/lib/data";

export default function EkskulPage() {
  return (
    <main className="bg-white min-h-screen">
      <PageHero title="Ekstrakurikuler" imageUrl="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1920&auto=format&fit=crop" alt="Ekstrakurikuler" />
      <PageBreadcrumb items={[{ label: "Home", href: "/" }, { label: "Ekskul" }]} />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <RevealOnScroll as="section" direction="up" className="text-gray-700">
          <RevealOnScroll as="h2" direction="up" className="text-red-700 font-bold text-2xl mb-3">
            Kembangkan Minat & Bakatmu
          </RevealOnScroll>
          <RevealOnScroll direction="up" delayClassName="delay-100" className="mb-6">
            <hr className="border-gray-300" />
          </RevealOnScroll>
          <RevealOnScroll as="p" direction="up" delayClassName="delay-200" className="mb-8 max-w-3xl">
            Di SMANSA, kami percaya bahwa pendidikan tidak hanya terjadi di dalam kelas. Kami menyediakan beragam kegiatan ekstrakurikuler untuk membantu siswa mengembangkan minat, bakat, serta keterampilan sosial dan kepemimpinan.
          </RevealOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {ekskulList.map((ekskul, index) => (
              <RevealOnScroll as="div" key={ekskul.title} direction="up" className="group" style={{ transitionDelay: `${Math.min(index * 90, 450)}ms` }}>
                <Link href={ekskul.href} className="block border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="overflow-hidden">
                    <img src={ekskul.image} alt={ekskul.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg mb-2 text-gray-800">{ekskul.title}</h3>
                    <p className="text-sm text-gray-600">{ekskul.description}</p>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </main>
  );
}
