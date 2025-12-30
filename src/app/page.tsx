'use client';
import React, { useState } from 'react';
import { MapPin, Clock, CheckCircle2, ChevronRight, Camera, Star, Quote, X, Zap, Users, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import NavbarLP from '@/components/NavbarLP';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function LandingPage() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const galleryImages = [
    "/images/image8.png", "/images/image3.png", "/images/image1.png",
    "/images/image4.jpg", "/images/image6.jpg", "/images/image5.jpg",
    "/images/image2.png", "/images/image7.png"
  ];

  const reviews = [
    { id: 1, name: "Mega Wulandari", text: "Privasinya bener-bener terjaga, lighting-nya juara!", rate: 5 },
    { id: 2, name: "Dyas Tri A.", text: "Proses reservasi sat-set. Hasil fotonya jernih parah.", rate: 5 },
    { id: 3, name: "Azizi Asadel", text: "Vibe studionya estetik banget buat konten IG.", rate: 5 },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FF] font-['Plus_Jakarta_Sans',sans-serif] text-zinc-900 overflow-x-hidden">
      <NavbarLP />

      {/* --- HERO SECTION --- */}
      <section className="relative h-[85vh] md:h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/80 to-[#F8F9FF] z-10" />
          <img src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop" 
               className="w-full h-full object-cover opacity-20 grayscale" alt="Bg" />
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-20 text-center px-4 max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-white border border-sky-100 mb-4 md:mb-8 shadow-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            <span className="text-[9px] md:text-xs font-bold tracking-[0.2em] text-sky-600 uppercase">Self Photo Ter-Worth It Bogor</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-[100px] font-['Playfair_Display',serif] leading-[1.1] md:leading-[0.9] text-zinc-900 tracking-tighter mb-6 md:mb-8">
            Pose Suka-Suka, <br /> <span className="italic font-light text-zinc-400">Hasilnya Gila.</span>
          </h1>
          <p className="text-zinc-500 text-sm md:text-xl max-w-2xl mx-auto leading-relaxed font-light mb-8 px-4">
            Gak perlu insecure. Di Linea, kamu yang pegang remote-nya, kamu yang atur gayanya. 
            <span className="block font-bold italic text-sky-500 mt-2">Privasi 100%, Hasil Bintang 5.</span>
          </p>
          <Link href="/booking" className="group relative inline-flex items-center gap-3 bg-zinc-900 text-white px-8 py-3.5 md:px-12 md:py-5 rounded-full font-bold transition-all shadow-xl hover:scale-105 active:scale-95">
            <span className="text-[10px] md:text-sm uppercase tracking-widest">Amankan Slot Sekarang</span>
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>

      {/* --- GALLERY SECTION (MASONRY STYLE - FULL PHOTO) --- */}
      <motion.section {...fadeInUp} id="gallery" className="py-12 md:py-20 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-2 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-['Playfair_Display',serif]">Galeri</h2>
            <p className="text-zinc-400 italic font-medium text-[10px] md:text-sm tracking-[0.2em] uppercase">Klik untuk lihat foto utuh</p>
          </div>

          {/* Menggunakan columns CSS agar foto tidak terpotong (Full Image) */}
          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {galleryImages.map((url, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedImg(url)} 
                className="break-inside-avoid rounded-xl md:rounded-3xl overflow-hidden border border-zinc-100 shadow-sm cursor-zoom-in"
              >
                <img 
                  src={url} 
                  alt="Gallery" 
                  className="w-full h-auto object-contain block" // object-contain & h-auto agar foto terlihat full
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* --- PRICELIST SECTION (SMALLER CARDS) --- */}
      <motion.section {...fadeInUp} id="pricelist" className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="text-center md:text-left mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-['Playfair_Display',serif] mb-2 text-zinc-900">Pricelist</h2>
            <div className="w-12 h-1 bg-sky-200 mb-4 rounded-full md:mx-0 mx-auto" />
          </div>

          {/* Grid dikecilkan gap-nya dan padding card dikurangi agar lebih compact */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {[
              { title: "Basic", icon: <Zap size={18}/>, price: "150k", color: "bg-white", text: "text-zinc-900", sub: "1-2 Orang", features: ["15 Mins Session", "All Digital Files", "1 Printed Photo"] },
              { title: "Group", icon: <Users size={18}/>, price: "350k", color: "bg-zinc-900 text-white", text: "text-white", sub: "5-7 Orang", features: ["30 Mins Session", "All Digital Files", "3 Printed Photos"] },
              { title: "Custom", icon: <Sparkles size={18}/>, price: "Custom", color: "bg-white", text: "text-zinc-900", sub: "Request", features: ["Event Wisuda", "Ulang Tahun", "Custom Print"] }
            ].map((p, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} className={`${p.color} p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] border border-zinc-100 shadow-md flex flex-col justify-between`}>
                <div className="space-y-3">
                  <div className={`w-10 h-10 ${p.title === "Group" ? 'bg-white/10 text-sky-300' : 'bg-sky-50 text-sky-500'} rounded-xl flex items-center justify-center`}>{p.icon}</div>
                  <h3 className="text-xl font-bold font-['Playfair_Display',serif] italic">{p.title}</h3>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">{p.sub}</p>
                  <ul className="space-y-2 text-xs md:text-sm font-medium opacity-80">
                    {p.features.map(f => <li key={f} className="flex items-center gap-2"><CheckCircle2 size={12} className="text-sky-400"/> {f}</li>)}
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-zinc-100/10 text-center">
                  <p className="text-2xl md:text-3xl font-bold font-['Playfair_Display',serif] mb-4">Rp {p.price}</p>
                  <Link href="/booking" className={`block w-full py-2.5 rounded-full text-[9px] font-black uppercase tracking-widest ${p.title === "Group" ? 'bg-sky-400 text-white' : 'bg-zinc-900 text-white'}`}>Pilih Paket</Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* --- REVIEWS --- */}
      <motion.section {...fadeInUp} id="reviews" className="py-12 bg-[#F8F9FF]">
        <div className="max-w-7xl mx-auto px-6 md:px-20 text-center">
            <h2 className="text-3xl md:text-5xl font-['Playfair_Display',serif] mb-2 tracking-tight text-zinc-900">Testimoni</h2>
            <div className="w-12 h-1 bg-sky-200 mb-10 rounded-full mx-auto" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {reviews.map((rev) => (
                    <div key={rev.id} className="p-8 rounded-[2rem] bg-white shadow-sm border border-zinc-100 flex flex-col text-left">
                        <Quote className="w-6 h-6 text-sky-100 mb-4" />
                        <p className="text-zinc-700 leading-relaxed mb-6 italic text-sm">"{rev.text}"</p>
                        <div className="flex items-center justify-between pt-4 border-t border-zinc-50 font-bold text-[10px] tracking-widest uppercase">
                            <span>{rev.name}</span>
                            <div className="flex gap-0.5">{[...Array(rev.rate)].map((_, i) => <Star key={i} size={10} className="fill-sky-400 text-sky-400" />)}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </motion.section>

      {/* --- LOCATION --- */}
      <motion.section {...fadeInUp} className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-20 flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div className="text-center md:text-left w-full md:w-1/2">
              <h2 className="text-3xl md:text-5xl font-['Playfair_Display',serif] mb-4">Lokasi</h2>
              <div className="space-y-2 text-sm md:text-lg font-medium text-zinc-600">
                <p>Kp. Bitung Sari Ds. Bitung Ratna RT 004/002 <br /> Kec.Ciawi Kab. Bogor</p>
                <p className="text-sky-500 font-bold">09.00 - 21.00 WIB</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 aspect-video bg-zinc-100 rounded-[2rem] overflow-hidden border-[6px] border-zinc-50 shadow-xl">
                <iframe src="https://www.google.com/maps/embed?..." className="w-full h-full grayscale" loading="lazy"></iframe>
            </div>
        </div>
      </motion.section>

      {/* --- FOOTER --- */}
      <footer className="py-10 bg-white border-t border-zinc-100 text-center">
        <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-xl font-bold font-['Playfair_Display',serif] uppercase tracking-tighter mb-4">LINEASTUDIO</h3>
            <p className="text-[10px] font-bold tracking-[0.4em] text-zinc-300 uppercase">© 2025 LINEASTUDIO — ALL RIGHTS RESERVED</p>
        </div>
      </footer>

      {/* --- FULLSCREEN MODAL --- */}
      {selectedImg && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10" onClick={() => setSelectedImg(null)}>
          <button className="absolute top-6 right-6 text-white"><X size={32}/></button>
          <img src={selectedImg} className="max-w-full max-h-full object-contain rounded-lg shadow-2xl" alt="Preview" />
        </div>
      )}
    </div>
  );
}