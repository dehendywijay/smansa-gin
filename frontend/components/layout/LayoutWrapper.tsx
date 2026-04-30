"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import PageTransition from "../animations/PageTransition";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");
  const isAuth = pathname?.startsWith("/main/auth");

  if (isAdmin || isAuth) return <>{children}</>;

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <PageTransition key={pathname}>
          {children}
        </PageTransition>
      </main>
      <Footer />
    </div>
  );
}
