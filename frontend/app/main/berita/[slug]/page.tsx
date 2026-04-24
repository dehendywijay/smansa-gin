"use client";

import Sidebar from "@/components/news/SideNews";
import RevealOnScroll from "@/components/animations/RevealOnScroll";
import PageBreadcrumb from "@/components/layout/PageBreadcrumb";
import PageHero from "@/components/shared/PageHero";
import { api_images } from "@/constans/strings";
import { useNewsDetail } from "@/hook/useNewsDetail";
import { formatDate } from "@/lib/date";
import Image from "next/image";
import React from "react";

export default function Home({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  const { news, loading, error } = useNewsDetail(slug);

  return (
    <main className="bg-white min-h-screen">
      <PageHero title="Detail Berita" imageUrl="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1920&auto=format&fit=crop" alt="Hero Background" heightClassName="h-80" />
      <PageBreadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Berita Terbaru", href: "/main/berita" },
          {
            label: news?.title ? (news.title.length > 30 ? `${news.title.substring(0, 30)}...` : news.title) : "Loading...",
          },
        ]}
      />

      <section className="relative overflow-hidden py-10">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=1920&auto=format&fit=crop" alt="Background artikel" fill className="object-cover opacity-10" />
          <div className="absolute inset-0 bg-white/90"></div>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl mx-auto px-6">
          <div className="text-gray-700 md:col-span-3">
            {loading ? (
              <RevealOnScroll as="p" direction="up" className="mb-4 mt-4 text-gray-600">
                Loading...
              </RevealOnScroll>
            ) : error ? (
              <RevealOnScroll as="p" direction="up" className="mb-4 mt-4 text-red-600">
                {error}
              </RevealOnScroll>
            ) : (
              <RevealOnScroll as="article" direction="up" rootMargin="0px 0px -10% 0px">
                <RevealOnScroll as="h2" direction="up" className="text-black font-bold text-3xl md:text-4xl mb-4 leading-tight">
                  {news?.title}
                </RevealOnScroll>
                <RevealOnScroll as="div" direction="up" delayClassName="delay-100" className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <div>
                    By <span className="font-semibold text-gray-800">Admin</span>
                  </div>
                  <div>•</div>
                  <div>{news?.createdAt ? formatDate(news.createdAt) : "-"}</div>
                </RevealOnScroll>
                {news?.thumbnail && (
                  <RevealOnScroll direction="up" delayClassName="delay-150" className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
                    <Image src={`${api_images}/${news.thumbnail}`} alt={news.title} fill className="object-cover" />
                  </RevealOnScroll>
                )}
                <RevealOnScroll direction="up" delayClassName="delay-200">
                  <div className="prose max-w-none text-gray-600 leading-relaxed text-lg whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: news?.content || "" }} />
                </RevealOnScroll>
              </RevealOnScroll>
            )}
          </div>
          <RevealOnScroll as="div" direction="up" delayClassName="delay-150" className="md:col-span-1">
            <Sidebar />
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
}
