"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight
} from "lucide-react";
import { menuData } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 overflow-hidden relative">
      {/* Decorative Gradient Blur */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-primary/10 blur-[100px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Branding & Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <Image 
                  src="/img/logo-smansa.png" 
                  alt="Logo SMAN 1 Bangunrejo" 
                  fill 
                  className="object-contain brightness-110"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-white text-lg leading-tight uppercase tracking-tight">
                  SMA Negeri 1
                </span>
                <span className="font-heading font-bold text-brand-secondary text-lg leading-tight uppercase tracking-tight">
                  Bangunrejo
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Membentuk generasi cerdas, berkarakter, dan berdaya saing global berlandaskan iman dan takwa.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: Facebook, href: "https://www.facebook.com/324948335046042", color: "hover:text-blue-500" },
                { icon: Instagram, href: "https://www.instagram.com/smansabangunrejo/?hl=en", color: "hover:text-pink-500" },
                { icon: Twitter, href: "https://www.instagram.com/smansabangunrejo/?hl=en", color: "hover:text-sky-400" },
                { icon: Youtube, href: "https://www.youtube.com/channel/UCWwq4domYrvlazIWwi9IENQ", color: "hover:text-red-500" },
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] ${social.color}`}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Tautan Cepat */}
          <div className="space-y-6 lg:pl-8">
            <h4 className="text-white font-heading font-bold text-lg">Tautan Cepat</h4>
            <ul className="space-y-3">
              {menuData.slice(1).map((item, i) => (
                <li key={i}>
                  <Link 
                    href={item.href} 
                    className="group flex items-center gap-2 hover:text-white transition-colors text-sm"
                  >
                    <ArrowRight size={14} className="text-brand-primary transition-transform group-hover:translate-x-1" />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Kontak Kami */}
          <div className="space-y-6">
            <h4 className="text-white font-heading font-bold text-lg">Kontak Kami</h4>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <MapPin size={20} className="text-brand-primary shrink-0" />
                <span className="text-sm leading-relaxed">
                  Jl. Raya Sidorejo, Kec. Bangunrejo, <br />
                  Kab. Lampung Tengah, Lampung 34173
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={20} className="text-brand-primary shrink-0" />
                <span className="text-sm">+62 811-7970-1215</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={20} className="text-brand-primary shrink-0" />
                <span className="text-sm">info@sman1bangunrejo.sch.id</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Lokasi Map */}
          <div className="space-y-6">
            <h4 className="text-white font-heading font-bold text-lg">Lokasi Sekolah</h4>
            <div className="rounded-xl overflow-hidden grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500 border border-slate-800 aspect-video relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.599073888293!2d105.0142012!3d-5.168013500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e474b21204d4515%3A0xb961d99aa077aa7d!2sSMAN%201%20Bangunrejo!5e0!3m2!1sid!2sid!4v1714451820610!5m2!1sid!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
              />
              <div className="absolute inset-0 bg-brand-primary/10 pointer-events-none group-hover:opacity-0 transition-opacity" />
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-500">
            © {currentYear} <span className="text-slate-400 font-bold">SMA Negeri 1 Bangunrejo</span>. All Rights Reserved.
          </p>
          <p className="text-xs text-slate-600 flex items-center flex-wrap justify-center md:justify-end gap-0.5 font-medium">
            <span>Built by</span>
            <a 
              href="https://github.com/DikaRamadhani" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group/name px-1.5 py-0.5"
            >
              <span className="relative z-10 text-brand-primary font-bold transition-all duration-300 group-hover/name:text-white inline-block group-hover/name:scale-110">DIKA</span>
              <span className="absolute inset-0 bg-brand-primary scale-x-0 group-hover/name:scale-x-100 transition-transform duration-300 origin-left rounded-md -z-0" />
            </a>
            <span className="text-slate-400 mx-0.5">&</span>
            <a 
              href="https://github.com/dehendywijay" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group/name px-1.5 py-0.5"
            >
              <span className="relative z-10 text-brand-primary font-bold transition-all duration-300 group-hover/name:text-white inline-block group-hover/name:scale-110">DEHENDY</span>
              <span className="absolute inset-0 bg-brand-primary scale-x-0 group-hover/name:scale-x-100 transition-transform duration-300 origin-left rounded-md -z-0" />
            </a>
          </p>
        </div> 
      </div>
    </footer>
  );
}
