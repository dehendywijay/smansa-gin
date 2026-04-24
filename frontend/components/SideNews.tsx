"use client";

import { useNews } from "@/hook/useNews";
import { formatDate } from "@/lib/date";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  const { news, loading, error } = useNews();

  if (loading) {
    return <aside className="w-full max-w-sm text-sm text-gray-500">Loading latest posts...</aside>;
  }

  if (error) {
    return <aside className="w-full max-w-sm text-sm text-red-600">{error}</aside>;
  }

  return (
    <aside className="w-full max-w-sm">
      <div className="mb-10">
        <h3 className="font-bold text-lg mb-4 tracking-wide">SEARCH</h3>

        <div className="relative">
          <input type="text" placeholder="Search ..." className="w-full border border-gray-300 p-3 pr-10" />

          <span className="absolute right-3 top-3 text-gray-500">🔍</span>
        </div>
      </div>

      <div>
        <h3 className="font-bold text-lg mb-6 tracking-wide">LATEST POSTS</h3>

        <div className="space-y-6">
          {news.map((post) => (
            <Link key={post.id} href={`/berita/${post.id}`} className="flex gap-4 group">
              <div className="relative w-20 h-20 shrink-0">
                <Image src={post.thumbnail} alt={post.title} fill className="object-cover" />
              </div>

              <div>
                <h4 className="font-semibold leading-snug group-hover:text-blue-600 transition">{post.title}</h4>

                <p className="text-sm text-gray-500 mt-2">{formatDate(post.createdAt)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
