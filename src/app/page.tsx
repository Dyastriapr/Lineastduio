'use client';

import React, { useState } from 'react';
import { CheckCircle2, ChevronRight, ChevronLeft, Star, Quote, X, Zap, Users, Sparkles, MapPin, Clock, Camera } from 'lucide-react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import NavbarLP from '@/components/NavbarLP';
import Link from 'next/link';
import Image from 'next/image';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

export default function LandingPage() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [priceIdx, setPriceIdx] = useState(0);
  const [reviewIdx, setReviewIdx] = useState(0);

  const galleryImages = [
    "/images/image8.png", "/images/image3.png", "/images/image1.png",
    "/images/image4.jpg", "/images/image6.jpg", "/images/image5.jpg",
    "/images/image2.png", "/images/image7.png", "/images/image2.png",
  ];

  const reviews = [
    { id: 1, name: "Mega Wulandari", text: "Privasinya bener-bener terjaga, lighting-nya juara!", rate: 5 },
    { id: 2, name: "Dyas Tri A.", text: "Proses reservasi sat-set. Hasil fotonya jernih parah.", rate: 5 },
    { id: 3, name: "Azizi Asadel", text: "Vibe studionya estetik banget buat konten IG.", rate: 5 },
  ];

  const pricelist = [
    { title: "Paket Basic", icon: <Zap size={24}/>, price: "60.000", color: "bg-white", sub: "1-3 Orang", features: ["1-3 Orang" ,"Sesi 30 Menit ", "Digital Files", "1 Printed Photo"] },
    { title: "Paket Group", icon: <Users size={24}/>, price: "140.000", color: "bg-zinc-900 text-white", sub: "4-8 Orang", features: ["4-8 Orang", "Sesi 30 Mins Menit", "Digital Files", "3 Printed Photos"] },
    { title: "Custom", icon: <Sparkles size={24}/>, price: "Custom", color: "bg-white", sub: "Request Khusus", features: ["Atur waktu dan jumlah orang sesukamu."] }
  ];

  const nextSlide = (current: number, setter: Function, max: number) => setter(current === max - 1 ? 0 : current + 1);
  const prevSlide = (current: number, setter: Function, max: number) => setter(current === 0 ? max - 1 : current - 1);

  return (
    <div className="min-h-screen bg-[#F8F9FF] font-['Plus_Jakarta_Sans',sans-serif] text-zinc-900 overflow-x-hidden">
      <NavbarLP />  

      {/* --- HERO SECTION --- */}
      <section className="relative h-[85vh] md:h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/80 to-[#F8F9FF] z-10" />
          <Image src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop" fill priority className="object-cover opacity-20 grayscale" alt="Hero Bg" />
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-20 text-center px-4 max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-white border border-sky-100 mb-6 md:mb-8 shadow-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            <span className="text-[9px] md:text-xs font-bold tracking-[0.2em] text-sky-600 uppercase">Self Photo Ter-Worth It Bogor</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-[100px] font-['Playfair_Display',serif] leading-[1.1] md:leading-[0.9] text-zinc-900 tracking-tighter mb-6 md:mb-8">
            Pose Suka-Suka, <br /> <span className="italic font-light text-zinc-400">Hasilnya Gila.</span>
          </h1>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mb-10 space-y-2">
            <p className="text-zinc-500 text-sm md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
                Gak perlu nunggu aba-aba fotografer galak. Di sini kamu bosnya, remote di tanganmu, gaya sak karepmu. 
            </p>
            <p className="text-sky-500 text-xs md:text-lg font-bold italic">
                100% Privasi, Gak Perlu Jaim, Di Sini Kamu Yang Main.
            </p>
          </motion.div>
          <Link href="/booking" className="group relative inline-flex items-center gap-3 bg-zinc-900 text-white px-8 py-3.5 md:px-12 md:py-5 rounded-full font-bold transition-all shadow-xl hover:scale-105 active:scale-95">
            <span className="text-[10px] md:text-sm uppercase tracking-widest">Reservasi Sekarang</span>
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </section>

      {/* --- GALLERY SECTION --- */}
      <motion.section variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }} id="gallery" className="py-16 md:py-24 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="text-center md:text-left mb-10 md:mb-16">
            <h2 className="text-4xl md:text-6xl font-['Playfair_Display',serif] mb-2 text-zinc-900 tracking-tight lowercase first-letter:uppercase">Galeri</h2>
            <div className="w-16 md:w-24 h-1.5 bg-sky-200 mb-4 rounded-full md:mx-0 mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[150px] md:auto-rows-[250px]">
            {galleryImages.map((url, i) => (
              <motion.div key={i} whileHover={{ scale: 1.02 }} onClick={() => setSelectedImg(url)} className={`relative rounded-xl md:rounded-3xl overflow-hidden border border-zinc-100 shadow-sm cursor-zoom-in group ${i % 5 === 0 ? 'md:row-span-2 md:col-span-2' : ''}`}>
                <Image src={url} alt="Galeri" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

     {/* --- PRICELIST SECTION --- */}
<motion.section 
  variants={fadeInUp} 
  initial="initial" 
  whileInView="whileInView" 
  viewport={{ once: true }} 
  id="pricelist" 
  className="py-20 md:py-32 bg-white"
>
  <div className="max-w-7xl mx-auto px-6 md:px-20">
    <div className="mb-16 md:mb-24">
      <h2 className="text-4xl md:text-6xl font-['Playfair_Display',serif] mb-4 text-zinc-900 tracking-tight lowercase first-letter:uppercase">
        Pricelist
      </h2>
      <div className="w-16 md:w-24 h-1.5 bg-sky-200 mb-4 rounded-full " />
    </div>

    <div className="relative">
      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-3 gap-6 items-center">
        {pricelist.map((p, i) => {
          const isMiddle = i === 1; 
          // Cek apakah warna background-nya gelap (misal bg-zinc-900 atau bg-black)
          const isDark = p.color.includes('zinc-900') || p.color.includes('black');

          return (
            <motion.div
              key={i}
              whileHover={{ y: -15 }}
              className={`relative ${p.color} p-10 rounded-[3.5rem] border flex flex-col justify-between transition-all duration-500
                ${isMiddle 
                  ? 'scale-110 z-20 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.25)] border-transparent py-16' 
                  : 'scale-100 z-10 shadow-xl border-zinc-100 opacity-95'
                }`}
            >
              {/* Badge untuk paket tengah */}
              {isMiddle && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-sky-400 text-white px-6 py-2 rounded-full text-[10px] font-black tracking-[0.2em] uppercase shadow-lg shadow-sky-200">
                  Most Popular
                </div>
              )}

              <div className="space-y-8">
                {/* Icon Box */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-inner 
                  ${isDark ? 'bg-white/10 text-sky-300' : 'bg-sky-50 text-sky-500'}`}>
                  {p.icon}
                </div>
                
                {/* Judul Paket */}
                <div>
                  <h3 className={`text-4xl font-bold font-['Playfair_Display',serif] italic mb-2 
                    ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                    {p.title}
                  </h3>
                  <div className={`h-1.5 w-12 rounded-full ${isDark ? 'bg-sky-400' : 'bg-sky-200'}`} />
                </div>

                {/* Fitur List */}
                <ul className={`space-y-4 text-lg font-medium ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
                  {p.features.map(f => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className={isDark ? 'text-sky-400' : 'text-sky-500'}/> 
                      <span className="leading-tight">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bagian Harga & Tombol */}
              <div className={`mt-12 pt-8 border-t ${isDark ? 'border-white/10' : 'border-zinc-100'} text-center`}>
                <div className="mb-10">
                  <p className={`text-5xl font-bold font-['Playfair_Display',serif] ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                    <span className="text-lg font-sans font-medium mr-1 opacity-50 italic">Rp</span>
                    {p.price}
                  </p>
                </div>
                
                <Link 
                  href="/booking" 
                  className={`block w-full py-6 rounded-2xl text-xs font-black uppercase tracking-[0.25em] transition-all active:scale-95
                    ${isDark 
                      ? 'bg-white text-zinc-900 hover:bg-sky-400 hover:text-white' 
                      : 'bg-zinc-900 text-white hover:bg-sky-500'
                    }`}
                >
                  Pilih Paket
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile View (Tetap pakai logika pIdx tapi warna teks dinamis) */}
      <div className="md:hidden flex items-center relative">
        <button onClick={() => prevSlide(priceIdx, setPriceIdx, pricelist.length)} className="absolute -left-4 z-40 p-3 rounded-full bg-white shadow-xl text-zinc-400 active:scale-75 transition-transform"><ChevronLeft size={24}/></button>
        
        <AnimatePresence mode="wait">
          {(() => {
            const current = pricelist[priceIdx];
            const isDark = current.color.includes('zinc-900') || current.color.includes('black');
            return (
              <motion.div 
                key={priceIdx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className={`${current.color} w-full p-10 rounded-[3rem] border border-zinc-100 shadow-2xl flex flex-col min-h-[500px]`}
              >
                <div className="flex-1 space-y-6">
                   <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${isDark ? 'bg-white/10 text-sky-300' : 'bg-sky-50 text-sky-500'}`}>{current.icon}</div>
                   <h3 className={`text-3xl font-bold font-['Playfair_Display',serif] italic ${isDark ? 'text-white' : 'text-zinc-900'}`}>{current.title}</h3>
                   <ul className={`space-y-4 ${isDark ? 'text-zinc-300' : 'text-zinc-500'}`}>
                      {current.features.map(f => <li key={f} className="flex items-center gap-3"><CheckCircle2 size={18} className="text-sky-400"/> {f}</li>)}
                   </ul>
                </div>
                <div className={`mt-8 pt-6 border-t ${isDark ? 'border-white/10' : 'border-zinc-100'} text-center`}>
                   <p className={`text-4xl font-bold font-['Playfair_Display',serif] mb-8 ${isDark ? 'text-white' : 'text-zinc-900'}`}>Rp {current.price}</p>
                   <Link href="/booking" className={`block w-full py-5 rounded-2xl font-black uppercase tracking-widest text-xs ${isDark ? 'bg-white text-zinc-900' : 'bg-zinc-900 text-white'}`}>Pilih Paket</Link>
                </div>
              </motion.div>
            );
          })()}
        </AnimatePresence>

        <button onClick={() => nextSlide(priceIdx, setPriceIdx, pricelist.length)} className="absolute -right-4 z-40 p-3 rounded-full bg-white shadow-xl text-zinc-400 active:scale-75 transition-transform"><ChevronRight size={24}/></button>
      </div>
    </div>
  </div>
</motion.section>

      {/* --- REVIEWS SECTION (CAROUSEL MOBILE) --- */}
      <motion.section variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }} id="reviews" className="py-16 md:py-24 bg-[#F8F9FF]">
        <div className="max-w-7xl mx-auto px-6 md:px-20 text-center">
          <div className="text-center md:text-left mb-10 md:mb-16">
            <h2 className="text-4xl md:text-6xl font-['Playfair_Display',serif] mb-2 tracking-tight text-zinc-900 lowercase first-letter:uppercase">Apa menurut mereka</h2>
            <div className="w-16 md:w-24 h-1.5 bg-sky-200 mb-4 rounded-full md:mx-0 mx-auto" />
          </div>
          
          <div className="hidden md:grid md:grid-cols-3 gap-10">
            {reviews.map((rev) => (
              <div key={rev.id} className="p-10 rounded-[2.5rem] bg-white shadow-xl border border-zinc-100 flex flex-col text-left">
                <Quote className="w-12 h-12 text-sky-100 mb-6" />
                <p className="text-zinc-700 leading-relaxed mb-8 italic text-xl font-light">&quot;{rev.text}&quot;</p>
                <div className="flex items-center justify-between pt-6 border-t border-zinc-50 font-bold text-base tracking-widest uppercase text-zinc-400">
                  <span className="text-zinc-900">{rev.name}</span>
                  <div className="flex gap-1">{[...Array(rev.rate)].map((_, i) => <Star key={i} size={14} className="fill-sky-400 text-sky-400" />)}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View with Absolute Buttons */}
          <div className="md:hidden flex items-center relative px-2">
            <button onClick={() => prevSlide(reviewIdx, setReviewIdx, reviews.length)} className="absolute left-0 z-30 p-2 rounded-full bg-white shadow-lg border border-zinc-100 text-zinc-400"><ChevronLeft size={20}/></button>
            
            <AnimatePresence mode="wait">
              <motion.div 
                key={reviewIdx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full p-8 rounded-[2rem] bg-white shadow-2xl border border-zinc-100 flex flex-col text-left min-h-[320px]"
              >
                <Quote className="w-8 h-8 text-sky-100 mb-4" />
                <p className="text-zinc-700 leading-relaxed mb-6 italic text-base font-light flex-1">&quot;{reviews[reviewIdx].text}&quot;</p>
                <div className="flex items-center justify-between pt-4 border-t border-zinc-50 font-bold text-xs tracking-widest uppercase">
                  <span>{reviews[reviewIdx].name}</span>
                  <div className="flex gap-1">{[...Array(reviews[reviewIdx].rate)].map((_, i) => <Star key={i} size={10} className="fill-sky-400 text-sky-400" />)}</div>
                </div>
              </motion.div>
            </AnimatePresence>

            <button onClick={() => nextSlide(reviewIdx, setReviewIdx, reviews.length)} className="absolute right-0 z-30 p-2 rounded-full bg-white shadow-lg border border-zinc-100 text-zinc-400"><ChevronRight size={20}/></button>
          </div>
        </div>
      </motion.section>

      {/* --- LOCATION SECTION --- */}
      <motion.section variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }} id="location" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="text-center md:text-left mb-10 md:mb-16">
            <h2 className="text-4xl md:text-6xl font-['Playfair_Display',serif] mb-2 tracking-tight text-zinc-900 lowercase first-letter:uppercase">Lokasi Kami</h2>
            <div className="w-16 md:w-24 h-1.5 bg-sky-200 mb-4 rounded-full md:mx-0 mx-auto" />
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/3 space-y-8 text-center md:text-left">
              <div className="space-y-4">
                <div className="flex items-start gap-4 justify-center md:justify-start">
                  <MapPin className="text-sky-400 mt-1 shrink-0" />
                  <p className="text-base md:text-xl font-medium text-zinc-600">Kp. Bitung Sari Ds. Bitung Ratna RT 004/002 <br /> Kec. Ciawi Kab. Bogor</p>
                </div>
                <div className="flex items-center gap-4 justify-center md:justify-start">
                  <Clock className="text-sky-400 shrink-0" />
                  <p className="text-sky-500 font-bold tracking-widest uppercase text-sm md:text-lg">09.00 - 21.00 WIB</p>
                </div>
              </div>
              <a href="https://maps.app.goo.gl/..." target="_blank" className="inline-block bg-zinc-900 text-white px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-sky-500 transition-colors shadow-lg shadow-zinc-200">Petunjuk Jalan</a>
            </div>
            <div className="w-full md:w-2/3 h-[300px] md:h-[500px] bg-zinc-100 rounded-[3rem] overflow-hidden border-[8px] border-zinc-50 shadow-2xl relative">
              <iframe src="https://www.google.com/maps/embed?..." className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </motion.section>

      {/* --- FOOTER --- */}
      <footer className="py-16 bg-white border-t border-zinc-100 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl md:text-5xl font-bold font-['Playfair_Display',serif] uppercase tracking-tighter mb-6 text-zinc-900">LINEASTUDIO</h3>
          <p className="text-zinc-400 text-sm md:text-xl max-w-xl italic mx-auto font-light leading-relaxed mb-10">&quot;Capture your true self in total privacy.&quot;</p>
          <div className="flex justify-center gap-8 text-xs md:text-base font-bold uppercase tracking-[0.2em] text-zinc-400 border-b border-zinc-50 pb-10">
            <Link href="#gallery" className="hover:text-black transition-colors">Galeri</Link>
            <Link href="#pricelist" className="hover:text-black transition-colors">Pricelist</Link>
            <Link href="/login" className="hover:text-black transition-colors">Admin</Link>
          </div>
          <p className="text-[10px] md:text-sm font-bold tracking-[0.4em] text-zinc-300 uppercase mt-10">© 2025 LINEASTUDIO — ALL RIGHTS RESERVED</p>
        </div>
      </footer>

      {/* --- FULLSCREEN GALLERY MODAL --- */}
      {selectedImg && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4" onClick={() => setSelectedImg(null)}>
          <button className="absolute top-6 right-6 text-white bg-white/10 p-3 rounded-full backdrop-blur-md transition-transform hover:rotate-90"><X size={28}/></button>
          <div className="relative w-full h-[70vh] md:h-full max-w-4xl">
            <Image src={selectedImg} fill className="object-contain rounded-xl" alt="Preview" />
          </div>
        </div>
      )}
    </div>
  );
}