"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, ArrowRight, Home } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic login bisa ditambahkan di sini
    router.push("/admin/news/add");
  };

  return (
    <div className="min-h-screen flex bg-slate-50">
      {/* Left Side: Visual Branding (Hidden on Mobile) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-brand-primary overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1523050853063-8806950117d4?q=80&w=1920&auto=format&fit=crop" 
          alt="School" 
          fill 
          className="object-cover opacity-40 mix-blend-overlay scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-primary/80 to-brand-primary-dark" />
        
        <div className="relative z-10 w-full h-full flex flex-col justify-between p-16 text-white">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/img/logo-smansa.png" alt="Logo" width={50} height={50} className="brightness-200" />
            <div className="font-heading font-bold text-xl tracking-tight">
              SMA NEGERI 1 <br /> <span className="text-brand-secondary">BANGUNREJO</span>
            </div>
          </Link>

          <div className="space-y-6">
            <h1 className="text-5xl font-heading font-extrabold leading-tight">
              Sistem Informasi <br />
              Manajemen Sekolah
            </h1>
            <p className="text-xl text-blue-100/80 max-w-md font-light">
              Kelola data berita, kegiatan, dan administrasi sekolah dalam satu platform yang terintegrasi.
            </p>
          </div>

          <div className="text-sm text-blue-200/60">
            © {new Date().getFullYear()} SMAN 1 Bangunrejo. <br />
            Internal Access Only.
          </div>
        </div>

        {/* Decorative Circles */}
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-secondary/20 rounded-full blur-3xl" />
      </div>

      {/* Right Side: Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-md space-y-10">
          <div className="space-y-2">
            <Link href="/" className="inline-flex lg:hidden items-center gap-2 text-brand-primary font-bold mb-6">
              <Home size={18} /> Kembali ke Beranda
            </Link>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-900">Selamat Datang</h2>
            <p className="text-slate-500">Silakan masuk ke akun admin Anda.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Email / Username</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-primary transition-colors" size={20} />
                  <input 
                    type="text" 
                    placeholder="admin@smansa.sch.id"
                    className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-primary/10 focus:border-brand-primary transition-all"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Password</label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-primary transition-colors" size={20} />
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-primary/10 focus:border-brand-primary transition-all"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-brand-primary focus:ring-brand-primary" />
                <span className="text-slate-600">Ingat saya</span>
              </label>
              <Link href="#" className="text-brand-primary font-bold hover:underline">Lupa Password?</Link>
            </div>

            <button 
              type="submit" 
              className="w-full bg-brand-primary hover:bg-brand-primary-dark text-white py-4 rounded-2xl font-bold transition-all shadow-xl shadow-brand-primary/20 hover:shadow-brand-primary/40 flex items-center justify-center gap-2 group active:scale-[0.98]"
            >
              Masuk Sekarang
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </button>
          </form>

          <p className="text-center text-slate-500 text-sm">
            Butuh bantuan akses? <Link href="/main/hubungi-kami" className="text-brand-primary font-bold hover:underline">Hubungi IT Support</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
