"use client";

import { useNews } from "@/hook/useNews";
import NewsCard from "./NewsCard";
import { useState } from "react";

export default function NewsSection() {
  const { news, loading, error } = useNews();
  const [showAll, setShowAll] = useState(false);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-center text-red-600">{error}</p>;

  const displayedNews = showAll ? news : news.slice(0, 6);

  return (
    <section className="max-w-7xl mx-auto py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">BERITA TERBARU</h2>
        <p className="text-red-500 mt-2">Dapatkan Informasi Up To Date SMA N 1 BANGUNREJO</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {displayedNews.map((item) => (
          <NewsCard key={item.ID} news={item} />
        ))}
      </div>
      {!showAll && news.length > 6 && (
        <div className="flex justify-center mt-8">
          <button onClick={() => setShowAll(true)} className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition">
            Lihat Semua...
          </button>
        </div>
      )}
    </section>
  );
}
