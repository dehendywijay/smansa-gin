"use client";

import { Phone, Mail, MapPinned, Facebook, Twitter, Youtube, Instagram } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  return (
    <footer className="bg-black text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Image src="/img/1.jpg" alt="SMA Negri 1 Bangunrejo" width={120} height={40} />
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <Phone size={17} />
              <span>+6281179701215</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={17} />
              <span>sman1bangunrejo.sch.id</span>
            </div>

            <div className="flex items-center gap-3 mx-0.5">
              <MapPinned size={18} />
              <span>
                Jl. Raya Sidorejo, Kec. Bangunrejo <br />
                Kab. Lampung Tengah
              </span>
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <div className="border rounded-full p-2 hover:bg-white hover:text-black cursor-pointer">
              <Facebook size={16} onClick={() => router.push("https://www.facebook.com/324948335046042")} />
            </div>
            <div className="border rounded-full p-2 hover:bg-white hover:text-black cursor-pointer">
              <Twitter size={16} onClick={() => router.push("https://www.instagram.com/smansabangunrejo/?hl=en")} />
            </div>
            <div className="border rounded-full p-2 hover:bg-white hover:text-black cursor-pointer">
              <Youtube size={16} onClick={() => router.push("https://www.youtube.com/channel/UCWwq4domYrvlazIWwi9IENQ")} />
            </div>
            <div className="border rounded-full p-2 hover:bg-white hover:text-black cursor-pointer">
              <Instagram size={16} onClick={() => router.push("https://www.instagram.com/smansabangunrejo/?hl=en")} />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">SISTEM INFORMASI</h3>

          <ul className="space-y-2 text-sm">
            <li>Lorem</li>
            <li>Lorem</li>
            <li>LoremLorem</li>
            <li>Kritik & Saran Siswa</li>
            <li>Dapodik</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">APP PEMBELAJARAN</h3>

          <ul className="space-y-2 text-sm">
            <li>Lorem</li>
            <li>Lorem</li>
            <li>e-Rapor</li>
            <li>Lorem</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">LINK PARTNER</h3>

          <ul className="space-y-2 text-sm">
            <li>YPT</li>
            <li>Dapodik Sekolah</li>
            <li>Rapor Pendidikan</li>
            <li>Akreditasi </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center text-sm py-5">
        {" "}
        <i>
          &copy; 2026 <strong>SMA N 1 BANGUNREJO</strong>. All rights reserved.
        </i>
      </div>
    </footer>
  );
}
