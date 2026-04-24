import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import LayoutWrapper from "@/components/layout/LayoutWrapper";
// import TopBar from "@/components/TopBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SMA Negri 1 Bangunrejo",
  description: "Website resmi SMA Negri 1 Bangunrejo, menyediakan informasi lengkap tentang sekolah, berita terbaru.",
};

export default function MainRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="Main-layout">
      <LayoutWrapper>
        {children}
      </LayoutWrapper>
    </div>
  );
}
