"use client";
import { useState } from "react";
import Link from "next/link";
import { MenuItem } from "@/types/type";

type Props = {
  menu: MenuItem;
};

export default function NavItem({ menu }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative group" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <Link href={menu.href} className="flex items-center gap-1 px-3 py-6 hover:text-blue-900 transition-colors duration-200">
        {menu.title}
        {menu.subItems && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`ml-1 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        )}
      </Link>

      {/* Dropdown */}
      {menu.subItems && open && (
        <div className="absolute left-0 top-full w-56 z-50 pt-2">
          {/* Arrow pointer */}
          <div className="absolute top-1 left-8 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-100 rounded-sm"></div>

          {/* Dropdown menu */}
          <div className="bg-white text-[#1f2937] rounded-md shadow-lg border border-gray-100 relative rounded-tl-md">
            {menu.subItems.map((item, idx, items) => (
              <Link
                key={idx}
                href={item.href}
                className={`block px-5 py-3.5 text-sm font-medium hover:text-blue-900 transition-colors bg-white hover:bg-slate-50 ${
                  idx !== items.length - 1 ? "border-b border-gray-100/50" : ""
                } ${idx === 0 ? "rounded-t-md" : ""} ${idx === items.length - 1 ? "rounded-b-md" : ""}`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
