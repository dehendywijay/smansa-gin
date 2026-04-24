import Footer from "@/components/layout/footer";
import Sidebar from "@/components/news/SideNews";
import RevealOnScroll from "@/components/animations/RevealOnScroll";
import PageBreadcrumb from "@/components/layout/PageBreadcrumb";
import PageHero from "@/components/shared/PageHero";
import { programs } from "@/lib/data";

export default function ProgramPage() {
  return (
    <main className="bg-white min-h-screen">
      <PageHero title="Program" imageUrl="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1920&auto=format&fit=crop" alt="Program" />
      <PageBreadcrumb items={[{ label: "Home", href: "/" }, { label: "Ekskul" }]} />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl mx-auto px-6 py-10">
        <RevealOnScroll as="section" direction="up" rootMargin="0px 0px -10% 0px" className="md:col-span-3 text-gray-700">
          <RevealOnScroll as="h2" direction="up" className="text-red-700 font-bold text-2xl mb-3">
            Ekstakulikuler Sekolah
          </RevealOnScroll>
          <RevealOnScroll direction="up" delayClassName="delay-100" className="mb-6">
            <hr className="border-gray-300" />
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 gap-5">
            {programs.map((program, index) => (
              <RevealOnScroll as="article" key={program.title} direction="up" className="border border-gray-200 rounded-lg p-5" style={{ transitionDelay: `${Math.min(index * 90, 360)}ms` }}>
                <h3 className="font-bold text-lg mb-2">{program.title}</h3>
                <p className="text-sm text-gray-600">{program.description}</p>
              </RevealOnScroll>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll as="div" direction="up" delayClassName="delay-150" rootMargin="0px 0px -10% 0px">
          <Sidebar />
        </RevealOnScroll>
      </div>
    </main>
  );
}
