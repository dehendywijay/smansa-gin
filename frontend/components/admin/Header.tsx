"use client";

import { Bell, User, Menu } from "lucide-react";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Dashboard", href: "/admin" },
  { name: "News", href: "/admin/news" },
  { name: "Kepala Sekolah", href: "/admin/kepala-sekolah" },
  { name: "Guru & Staf", href: "/admin/guru-staf" },
  { name: "Ekskul", href: "/admin/ekskul" },
  { name: "Alumni", href: "/admin/alumni" },
  { name: "Galeri", href: "/admin/galeri" },
];

interface HeaderProps {
  onMenuToggle: () => void;
}

export default function Header({ onMenuToggle }: HeaderProps) {
  const pathname = usePathname();

  // Find current page name from navItems
  const currentPage = navItems.find((item) => item.href === pathname)?.name || "Dashboard";

  return (
    <header className="flex items-center justify-between h-16 px-4 md:px-6 bg-white border-b sticky top-0 z-30">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuToggle}
          className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Toggle Menu"
        >
          <Menu size={20} className="text-slate-600" />
        </button>
        
        <h2 className="text-lg font-bold text-slate-800">
          {currentPage}
        </h2>
      </div>

      <div className="flex items-center gap-3 md:gap-6">
        <button className="p-2 rounded-full hover:bg-slate-100 transition-colors relative">
          <Bell className="h-5 w-5 text-slate-600" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        
        <div className="flex items-center gap-3 pl-3 md:pl-6 border-l border-slate-100">
          <div className="hidden sm:block text-right">
            <div className="text-sm font-bold text-slate-800">John Doe</div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Administrator</div>
          </div>
          <div className="h-10 w-10 rounded-xl bg-brand-surface-alt flex items-center justify-center border border-brand-primary/10 shadow-sm">
            <User className="h-6 w-6 text-brand-primary" />
          </div>
        </div>
      </div>
    </header>
  );
}
