"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import HeroSlideCaption from "@/components/animations/HeroSlideCaption";
import { heroSlides } from "@/lib/homeData";

export default function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    const onSelect = () => setActiveSlideIndex(emblaApi.selectedScrollSnap());

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="embla__viewport overflow-hidden relative w-full h-screen" ref={emblaRef}>
      <div className="embla__container flex h-full">
        {heroSlides.map((slide, index) => (
          <div key={slide.title} className="embla__slide flex-[0_0_100%] min-w-0 relative h-full">
            <Image src={slide.imageUrl} alt={slide.alt} fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40"></div>
            <HeroSlideCaption title={slide.title} subtitle={slide.subtitle} isActive={index === activeSlideIndex} />
          </div>
        ))}
      </div>
    </div>
  );
}
