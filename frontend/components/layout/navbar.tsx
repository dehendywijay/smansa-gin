"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import NavItem from "./NavItem";
import { menuData } from "@/lib/data";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileItem, setOpenMobileItem] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;
      const isMobileViewport = window.innerWidth < 768;

      setIsScrolled(currentScrollY > 50);

      // Perilaku hide/show navbar hanya untuk mobile:
      // scroll turun -> sembunyikan, scroll naik -> tampilkan.
      if (isMobileViewport && Math.abs(scrollDelta) > 4) {
        if (scrollDelta > 0 && currentScrollY > 100) {
          setIsVisible(false);
          setIsMobileMenuOpen(false);
          setOpenMobileItem(null);
        } else {
          // Saat scroll naik, tampilkan hanya navbar utama (menu dropdown tetap tertutup).
          setIsVisible(true);
          setIsMobileMenuOpen(false);
          setOpenMobileItem(null);
        }
      } else if (!isMobileViewport) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-[transform,opacity,filter] duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] md:translate-y-0 md:opacity-100 md:blur-0 ${
        isVisible ? "translate-y-0 opacity-100 blur-0" : "-translate-y-full opacity-0 blur-sm"
      } ${isScrolled ? "bg-white border-b border-gray-200 text-gray-900" : "bg-transparent text-white"}`}
    >
      {/* Main Navbar */}
      <div className="flex justify-between items-center px-4 md:px-8 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="w-10 h-10 bg-blue-700 rounded flex items-center justify-center font-bold text-lg text-white group-hover:bg-blue-600 transition-colors">S</div>
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-tight tracking-wide">SMA Negri 1</span>
            <span className="font-bold text-lg leading-tight tracking-wide">Bangunrejo</span>
          </div>
        </Link>

        {/* Desktop Menu & Login Button */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-1 items-center text-sm font-semibold">
            {menuData.map((item, i) => (
              <NavItem key={i} menu={item} />
            ))}
          </div>

          {/* Login Button Desktop */}
          <Link href="/main/auth/login" className="px-6 py-2 rounded-full text-sm font-bold text-white bg-blue-600 transition-all duration-300 hover:bg-gradient-to-r from-blue-500 to-blue-700">
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl p-2 focus:outline-none"
          onClick={() => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
            if (isMobileMenuOpen) {
              setOpenMobileItem(null);
            }
          }}
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white text-gray-800 absolute top-full w-full border-t border-gray-200 shadow-xl max-h-[85vh] overflow-y-auto flex flex-col transition-all duration-300 ease-out ${
          isMobileMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="grow">
          {menuData.map((item, i) => (
            <div key={i} className="border-b border-gray-100">
              {item.subItems ? (
                <button
                  type="button"
                  className="w-full px-6 py-4 font-bold text-gray-800 hover:text-blue-600 transition-colors duration-200 flex items-center justify-between"
                  onClick={() => setOpenMobileItem(openMobileItem === i ? null : i)}
                >
                  <span>{item.title}</span>
                  <span className={`transition-transform duration-200 ${openMobileItem === i ? "rotate-180" : "rotate-0"}`}>▾</span>
                </button>
              ) : (
                <Link href={item.href} className="block px-6 py-4 font-bold text-gray-800 hover:text-blue-600 transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>
                  {item.title}
                </Link>
              )}
              {item.subItems && (
                <div className={`bg-gray-50 px-6 flex flex-col gap-2 overflow-hidden transition-all duration-300 ease-out ${openMobileItem === i ? "max-h-80 opacity-100 pb-4" : "max-h-0 opacity-0 pb-0"}`}>
                  {item.subItems.map((sub, idx) => (
                    <Link
                      key={idx}
                      href={sub.href}
                      className="text-sm text-gray-600 py-2 pl-4 border-l-2 border-blue-500 hover:text-blue-600 transition-colors duration-200"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setOpenMobileItem(null);
                      }}
                    >
                      {sub.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Login Button Mobile */}
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <Link
            href="/main/auth/login"
            className="block w-full text-center py-2 rounded-md font-bold text-white bg-blue-600 transition-all duration-300 hover:bg-gradient-to-r from-blue-500 to-blue-700"
            onClick={() => {
              setIsMobileMenuOpen(false);
              setOpenMobileItem(null);
            }}
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
