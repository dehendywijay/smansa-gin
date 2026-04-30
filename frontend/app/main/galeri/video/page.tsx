import RevealOnScroll from "@/components/animations/RevealOnScroll";
import PageHero from "@/components/shared/PageHero";
import { galleryData } from "@/lib/data";
import { PlayCircle, Calendar } from "lucide-react";

export default function VideoPage() {
  return (
    <main className="bg-white min-h-screen">
      <PageHero 
        title="Video Kegiatan" 
        imageUrl="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1920&auto=format&fit=crop" 
        alt="Video"
        breadcrumbs={[{ label: "Galeri" }, { label: "Video" }]}
      />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {galleryData.videos.map((video, index) => (
            <RevealOnScroll 
              key={index} 
              direction="up" 
              delayClassName={`delay-${index * 100}`}
              className="space-y-6"
            >
              <div className="relative aspect-video rounded-[32px] overflow-hidden shadow-2xl bg-slate-900 group">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="absolute inset-0 pointer-events-none border-2 border-white/10 rounded-[32px]" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-brand-primary uppercase tracking-wider">
                  <Calendar size={14} />
                  Tahun {video.date}
                </div>
                <h3 className="text-2xl font-heading font-bold text-slate-900 flex items-center gap-3">
                  <PlayCircle className="text-brand-primary" />
                  {video.title}
                </h3>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </main>
  );
}
