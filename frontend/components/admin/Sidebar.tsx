"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Newspaper, Tags, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

// Definisikan item-item navigasi untuk sidebar
const navItems = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "News", href: "/admin/news", icon: Newspaper },
  { name: "Category", href: "/admin/categories", icon: Tags },
  { name: "Users", href: "/admin/users", icon: Users },
];

// Komponen utama untuk Sidebar
export default function Sidebar() {
  // Dapatkan path URL saat ini untuk menyorot item menu yang aktif
  const pathname = usePathname();
  // State untuk mengelola kondisi sidebar (terlipat atau tidak)
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Fungsi untuk mengubah state isCollapsed
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    // Elemen aside sebagai container sidebar
    // Menggunakan cn untuk menggabungkan kelas-kelas Tailwind CSS secara kondisional
    <aside className={cn("hidden md:flex flex-col bg-gray-800 text-white transition-all duration-300 ease-in-out", isCollapsed ? "w-20" : "w-64")}>
      {/* Bagian header dari sidebar */}
      <div className="flex items-center justify-between p-4 h-16 border-b border-gray-700">
        {/* Tampilkan judul hanya jika sidebar tidak terlipat */}
        {!isCollapsed && (
          <h1 className="text-xl font-bold">
            <Link href="/admin">Admin Panel</Link>
          </h1>
        )}
        {/* Tombol untuk melipat/membuka sidebar */}
        <button onClick={toggleSidebar} className="p-2 rounded-md hover:bg-gray-700">
          {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
        </button>
      </div>
      {/* Navigasi utama */}
      <nav className="flex-1 p-2 space-y-2">
        {/* Petakan setiap item navigasi ke komponen Link */}
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "flex items-center p-3 rounded-md transition-colors",
              // Terapkan kelas yang berbeda jika item aktif
              pathname === item.href ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
              // Pusatkan konten jika sidebar terlipat
              isCollapsed ? "justify-center" : "",
            )}
          >
            {/* Ikon untuk item navigasi */}
            <item.icon className="h-5 w-5" />
            {/* Tampilkan nama item hanya jika sidebar tidak terlipat */}
            {!isCollapsed && <span className="ml-4">{item.name}</span>}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
