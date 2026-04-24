"use client";

import { cn } from "@/lib/utils";

type HeroSlideCaptionProps = {
  title: string;
  subtitle: string;
  isActive: boolean;
};

// Komponen reusable untuk animasi judul hero per-slide.
// `isActive` dikontrol dari carousel agar animasi berjalan saat slide aktif berubah.
export default function HeroSlideCaption({ title, subtitle, isActive }: HeroSlideCaptionProps) {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white w-full px-4">
      <h1 className={cn("text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-md transition-all duration-700 ease-in-out", isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>{title}</h1>
      <p className={cn("text-lg md:text-xl font-light drop-shadow transition-all duration-700 delay-150 ease-in-out", isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5")}>{subtitle}</p>
    </div>
  );
}
