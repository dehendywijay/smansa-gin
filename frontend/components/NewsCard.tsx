"use client";

import { News } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type NewsCardProps = {
  news: News;
};

export default function NewsCard({ news }: NewsCardProps) {
  const [hover, setHover] = useState(false);

  return (
    <Link href={`/main/berita/${news.id}`} className="relative block w-full h-105 overflow-hidden shadow-lg cursor-pointer" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      {!hover ? (
        <Image src={news.thumbnail} alt={news.title} fill className="object-cover" />
      ) : (
        <div className="bg-gray-800 text-white h-full flex flex-col justify-center p-6 text-center">
          <h3 className="text-xl font-bold mb-4">{news.title}</h3>
          <div className="w-16 h-0.5 bg-white mx-auto mb-4"></div>
          <p className="text-sm leading-relaxed">{news.content.slice(0, 120)}...</p>
        </div>
      )}
    </Link>
  );
}
