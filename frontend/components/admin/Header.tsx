"use client";

import { Bell, User, Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Dashboard", href: "/admin", icon: null },
  { name: "News", href: "/admin/news", icon: null },
  { name: "Category", href: "/admin/categories", icon: null },
  { name: "Users", href: "/admin/users", icon: null },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex items-center justify-between h-16 px-4 bg-white border-b">
      <div className="flex items-center">
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-md hover:bg-gray-100"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
        <div className="hidden md:block text-lg font-semibold">
          {navItems.find((item) => item.href === pathname)?.name || "Dashboard"}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Bell className="h-6 w-6 text-gray-600" />
        </button>
        <div className="flex items-center gap-2">
          <User className="h-8 w-8 rounded-full bg-gray-300 p-1" />
          <div className="hidden sm:block">
            <div className="font-semibold">John Doe</div>
            <div className="text-sm text-gray-500">Admin</div>
          </div>
        </div>
        {/* Add logout button here */}
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-b md:hidden">
          <nav className="flex flex-col p-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "flex items-center p-3 rounded-md transition-colors",
                  pathname === item.href
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
