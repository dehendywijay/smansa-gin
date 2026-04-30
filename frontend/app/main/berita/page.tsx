"use client";

import Sidebar from "@/components/news/SideNews";
import RevealOnScroll from "@/components/animations/RevealOnScroll";
import PageHero from "@/components/shared/PageHero";
import SkeletonCard from "@/components/shared/SkeletonCard";
import { api_images } from "@/constans/strings";
import { useNews } from "@/hook/useNews";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Calendar, User, ArrowRight, Grid, List } from "lucide-react";

export default function NewsList() {
  const { news: newsList, loading, error } = useNews();
  
  return (
    <main className="bg-white min-h-screen">
      <PageHero
        title="Berita & Informasi"
        imageUrl="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1920&auto=format&fit=crop"
        alt="Hero Background"
        breadcrumbs={[{ label: "Berita" }]}
      />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
          <section className="lg:col-span-3 space-y-12">
            
            {/* Filter Bar */}
            <RevealOnScroll direction="up" className="flex items-center justify-between py-6 border-b border-slate-100">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-slate-500">
                  Menampilkan <span className="text-slate-900 font-bold">{loading ? "..." : newsList.length}</span> berita terbaru
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-lg bg-brand-primary text-white shadow-lg shadow-brand-primary/20">
                  <Grid size={20} />
                </button>
                <button className="p-2 rounded-lg bg-slate-50 text-slate-400 hover:text-brand-primary transition-colors">
                  <List size={20} />
                </button>
              </div>
            </RevealOnScroll>

            {/* News List */}
            <div className="space-y-12">
              {loading ? (
                <div className="grid md:grid-cols-2 gap-8">
                  {[1, 2, 4, 5].map((i) => <SkeletonCard key={i} />)}
                </div>
              ) : error ? (
                <div className="p-12 text-center bg-red-50 rounded-3xl border border-red-100">
                  <p className="text-red-600 font-bold">{error}</p>
                </div>
              ) : (
                <div className="grid gap-12">
                  {newsList.map((post, index) => (
                    <RevealOnScroll
                      key={post.ID}
                      direction="up"
                      delayClassName={`delay-${(index % 3) * 100}`}
                      className="group flex flex-col md:flex-row gap-8 bg-white rounded-[32px] p-4 border border-transparent hover:border-brand-primary/10 hover:shadow-2xl transition-all duration-500"
                    >
                      {/* Image */}
                      <div className="relative w-full md:w-72 h-64 shrink-0 rounded-3xl overflow-hidden shadow-lg">
                        <Image
                          src={post.thumbnail?.startsWith('http') ? post.thumbnail : `${api_images}/${post.thumbnail}`}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-brand-primary text-[10px] font-bold uppercase tracking-wider">
                            Informasi
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 py-4 space-y-4 pr-4">
                        <div className="flex items-center gap-4 text-xs font-medium text-slate-500 uppercase tracking-widest">
                          <div className="flex items-center gap-1.5">
                            <Calendar size={14} className="text-brand-primary" />
                            {post.CreatedAt ? new Date(post.CreatedAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }) : "-"}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <User size={14} className="text-brand-primary" />
                            Admin
                          </div>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-slate-900 group-hover:text-brand-primary transition-colors leading-tight">
                          <Link href={`/main/berita/${post.slug}`}>{post.title}</Link>
                        </h2>

                        <div
                          className="text-slate-600 line-clamp-3 leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: post.content || "" }}
                        />

                        <Link 
                          href={`/main/berita/${post.slug}`}
                          className="inline-flex items-center gap-2 text-brand-primary font-bold hover:translate-x-1 transition-transform pt-2"
                        >
                          Baca Selengkapnya <ArrowRight size={18} />
                        </Link>
                      </div>
                    </RevealOnScroll>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <RevealOnScroll direction="left" delayClassName="delay-300">
              <Sidebar />
            </RevealOnScroll>
          </aside>
        </div>
      </div>
    </main>
  );
}
