"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const currentPath = pathname ?? "";
  const isAdminRoute = currentPath.startsWith("/admin");
  const isAuthRoute = currentPath.startsWith("/main/auth") || currentPath.startsWith("/auth");

  return (
    <>
      {!isAdminRoute && !isAuthRoute && <Navbar />}
      {children}
      {!isAdminRoute && !isAuthRoute && <Footer />}
    </>
  );
}
