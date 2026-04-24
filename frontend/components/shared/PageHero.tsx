import Image from "next/image";

type PageHeroProps = {
  title: string;
  imageUrl: string;
  alt: string;
  heightClassName?: string;
};

export default function PageHero({ title, imageUrl, alt, heightClassName = "h-72 md:h-80" }: PageHeroProps) {
  return (
    <section className={`relative w-full ${heightClassName} flex items-end`}>
      <div className="absolute inset-0">
        <Image src={imageUrl} alt={alt} fill className="object-cover opacity-35" />
        <div className="absolute inset-0 bg-slate-900/70"></div>
      </div>
      <div className="relative max-w-7xl mx-auto w-full px-6 pb-10 text-white">
        <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-wide">{title}</h1>
      </div>
    </section>
  );
}
