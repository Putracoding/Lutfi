/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Award, 
  MapPin, 
  BookOpen, 
  Shield, 
  MessageCircle, 
  User, 
  ChevronRight,
  Trophy,
  History,
  Timer
} from "lucide-react";

const achievements = [
  { title: "Juara 2 - UNISMA Open 2", year: "2023", rank: 2, medal: "Silver", color: "border-yellow-500" },
  { title: "Juara 2 - Candrabhaga Cup 2", year: "2023", rank: 2, medal: "Silver", color: "border-yellow-500" },
  { title: "Juara 2 - Kota Bekasi Challenge", year: "2024", rank: 2, medal: "Silver", color: "border-yellow-500" },
  { title: "Juara 3 - Bekasi Premiere 2", year: "2025", rank: 3, medal: "Bronze", color: "border-orange-400" },
  { title: "Juara 2 - O2SN SMK se-Kota Bekasi", year: "2025", rank: 2, medal: "Silver", color: "border-yellow-500" },
  { title: "Juara 2 - Candrabhaga Cup 4", year: "2026", rank: 2, medal: "Silver", color: "border-yellow-500" },
  { title: "Coming Soon: O2SN SMK 2026", year: "2026", status: "Persiapan Intensif", color: "border-primary" },
];

const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="mb-10">
    <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">{title}</span>
    <h2 className="text-4xl font-extrabold text-slate-900 leading-tight italic">{subtitle}</h2>
  </div>
);

export default function App() {
  const whatsappUrl = "https://wa.me/62895389543414";

  return (
    <div className="min-h-screen bg-surface">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">L</div>
            <span className="font-display font-bold text-xl tracking-tight text-slate-900">Luthfi Aditya</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
            <a href="#about" className="hover:text-primary transition-colors">Portfolio</a>
            <a href="#about" className="hover:text-primary transition-colors">TKJ Specialist</a>
            <a href="#achievements" className="hover:text-primary transition-colors">Pencak Silat</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        {/* Hero & About */}
        <div className="grid lg:grid-cols-12 gap-12 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 space-y-8"
          >
            <section id="hero">
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">About Me</span>
              <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6 italic">
                Teknik Komputer & Jaringan
              </h1>
              <p className="text-slate-600 leading-relaxed text-lg mb-8">
                Siswa Kelas 11 <span className="font-semibold text-slate-900">SMK Karya Guna 2 Bekasi</span>. Berfokus pada keunggulan teknis di bidang teknologi Informasi dan kepemimpinan melalui disiplin tinggi bela diri Pencak Silat.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-whatsapp text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-green-100 hover:scale-105 transition-transform"
                >
                  <MessageCircle className="w-5 h-5" />
                  Hubungi WhatsApp
                </a>
              </div>
            </section>

            <section id="about" className="space-y-4 bg-white p-7 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Pengalaman Organisasi</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="indicator-bar bg-primary h-12" />
                  <div>
                    <p className="font-bold text-slate-800">Ketua Ekstrakurikuler Pencak Silat</p>
                    <p className="text-sm text-slate-500">SMK KG 2 (Periode 2026) | PS Cakra Elang Indonesia (PSCEI)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="indicator-bar bg-slate-300 h-12" />
                  <div>
                    <p className="font-bold text-slate-800">Anggota Senior Rajawali Putih</p>
                    <p className="text-sm text-slate-500">Aktif sejak 2021 - Sekarang | Jabatan Manusia Periode 2023-2024</p>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>

          {/* Achievements Area */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100"
          >
            <div className="flex justify-between items-end mb-8">
              <h3 className="text-2xl font-extrabold text-slate-900">Prestasi Utama</h3>
              <span className="text-sm text-primary font-bold">Kategori Seni Tunggal</span>
            </div>

            <div className="space-y-3">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className={`flex items-center p-4 rounded-xl border-l-4 ${item.color} ${
                    item.status ? 'bg-blue-50 ring-2 ring-blue-100' : 'bg-slate-50'
                  }`}
                >
                  <div className={`w-10 text-2xl font-black mr-4 ${item.status ? 'text-primary/30' : 'text-slate-300'}`}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-slate-800">{item.title}</p>
                    <p className="text-xs text-slate-500">{item.status || `Tahun ${item.year}`}</p>
                  </div>
                  {item.medal && (
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                      item.rank === 2 ? 'bg-yellow-100 text-yellow-700' : 'bg-orange-100 text-orange-700'
                    }`}>
                      {item.medal}
                    </span>
                  )}
                  {item.status && (
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Technical Summary */}
        <section className="mt-16 bg-slate-900 text-white rounded-[3rem] p-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-extrabold mb-2 italic">Siap Berkolaborasi?</h2>
              <p className="text-slate-400 max-w-md">Buka peluang kerjasama di bidang Networking (TKJ) maupun pelatihan Pencak Silat.</p>
            </div>
            <a 
              href={whatsappUrl}
              className="px-10 py-5 bg-white text-slate-900 rounded-2xl font-extrabold text-lg hover:bg-slate-100 transition-colors shadow-xl"
            >
              Mulai Diskusi
            </a>
          </div>
        </section>
      </main>

      <footer className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center border-t border-slate-200">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <div className="text-[10px] uppercase font-black text-slate-400 tracking-widest">TKJ Specialist</div>
          <div className="text-[10px] uppercase font-black text-slate-400 tracking-widest">•</div>
          <div className="text-[10px] uppercase font-black text-slate-400 tracking-widest">Pencak Silat Artist</div>
        </div>
        <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">
          Bekasi, Indonesia © 2026 | Luthfi Aditya Rochman
        </p>
      </footer>
    </div>
  );
}
