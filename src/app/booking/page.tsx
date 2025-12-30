'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, Calendar, Clock, Users, Zap, Sparkles, 
  User, Phone, ArrowRight, CheckCircle2, Mail, Upload, Timer, QrCode, CreditCard, AlertCircle
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const PRICELIST = [
  { id: 'basic', title: "Paket Basic", icon: <Zap size={20}/>, price: 60000, sub: "1-3 Orang" },
  { id: 'group', title: "Paket Group", icon: <Users size={20}/>, price: 140000, sub: "4-8 Orang" },
  { id: 'custom', title: "Custom", icon: <Sparkles size={20}/>, price: 0, sub: "Atur Suka-Suka" }
];

const BG_COLORS = [
  { name: 'White', class: 'bg-white border-zinc-200' },
  { name: 'Grey', class: 'bg-zinc-400 border-zinc-500' },
  { name: 'Black', class: 'bg-zinc-900 border-zinc-900' },
  { name: 'Blue', class: 'bg-blue-200 border-blue-300' },
  { name: 'Pink', class: 'bg-pink-100 border-pink-200' },
];

export default function BookingPage() {
  const [selectedPackage, setSelectedPackage] = useState('basic');
  const [selectedBg, setSelectedBg] = useState('White');
  const [paymentMethod, setPaymentMethod] = useState('bank'); 
  const [totalPrice, setTotalPrice] = useState(60000);
  
  const [formData, setFormData] = useState({
    name: '', email: '', whatsapp: '', date: '', time: '',
    customPeople: 1, extraTime: 0, notes: '', paymentProof: null as File | null
  });

  useEffect(() => {
    if (selectedPackage === 'basic') setTotalPrice(60000);
    else if (selectedPackage === 'group') setTotalPrice(140000);
    else {
      const price = (formData.customPeople * 20000) + (formData.extraTime * 10000);
      setTotalPrice(price);
    }
  }, [selectedPackage, formData.customPeople, formData.extraTime]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-[#F8F9FF] text-zinc-900 font-['Plus_Jakarta_Sans',sans-serif] pb-20">
      <nav className="p-6 md:px-20 flex items-center justify-between bg-white border-b border-zinc-100 sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2 text-zinc-500 hover:text-zinc-900 font-bold text-xs uppercase tracking-widest transition-all">
          <ChevronLeft size={18} /> Kembali
        </Link>
        <h1 className="font-['Playfair_Display',serif] font-bold text-2xl italic text-center flex-1">Linea Booking.</h1>
        <div className="w-20 hidden md:block"></div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* --- LEFT SIDE: SUMMARY --- */}
          <div className="lg:col-span-5 space-y-8">
            <section>
              <h2 className="text-3xl font-['Playfair_Display',serif] font-bold mb-6 italic">Detail Pesanan.</h2>
              <div className="space-y-3">
                {PRICELIST.map((p) => (
                  <div key={p.id} onClick={() => setSelectedPackage(p.id)} className={`p-5 rounded-3xl border-2 cursor-pointer transition-all flex items-center justify-between ${selectedPackage === p.id ? 'border-zinc-900 bg-white shadow-xl' : 'border-transparent bg-zinc-100/50'}`}>
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${selectedPackage === p.id ? 'bg-zinc-900 text-white' : 'bg-white text-zinc-400'}`}>{p.icon}</div>
                      <div>
                        <h4 className="font-bold text-sm">{p.title}</h4>
                        <p className="text-[10px] uppercase tracking-wider opacity-60 font-bold">{p.sub}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-['Playfair_Display',serif] font-bold mb-4 italic">Background.</h2>
              <div className="flex flex-wrap gap-3">
                {BG_COLORS.map((bg) => (
                  <button key={bg.name} onClick={() => setSelectedBg(bg.name)} className={`w-10 h-10 rounded-full border-2 transition-all ${bg.class} ${selectedBg === bg.name ? 'ring-2 ring-zinc-900 ring-offset-2 scale-110' : ''}`} />
                ))}
              </div>
            </section>

            <div className="bg-zinc-900 rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10"><Sparkles size={100}/></div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-400 mb-2">Total Biaya</p>
              <h3 className="text-5xl font-['Playfair_Display',serif] font-bold">Rp {totalPrice.toLocaleString('id-ID')}</h3>
              
              <div className="mt-6 pt-6 border-t border-white/10 space-y-4">
                <div className="flex justify-between items-center bg-white/5 p-4 rounded-2xl border border-white/10">
                  <div>
                    <p className="text-[10px] font-bold uppercase text-sky-300 tracking-wider">Minimal DP (50%)</p>
                    <p className="text-xl font-bold font-['Playfair_Display',serif]">Rp {(totalPrice / 2).toLocaleString('id-ID')}</p>
                  </div>
                  <CheckCircle2 size={24} className="text-sky-400 opacity-50"/>
                </div>
                
                <div className="space-y-2 text-sm opacity-60">
                  <div className="flex justify-between"><span>Sesi</span><span className="text-white font-bold">{formData.time || '--:--'} WIB</span></div>
                  <div className="flex justify-between"><span>Paket</span><span className="text-white font-bold uppercase">{selectedPackage}</span></div>
                  <div className="flex justify-between"><span>Background</span><span className="text-white font-bold">{selectedBg}</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: FORM --- */}
          <div className="lg:col-span-7 bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-zinc-50">
            <form className="space-y-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Nama</label>
                  <div className="relative"><User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-300" size={18} /><input required name="name" type="text" className="w-full bg-zinc-50 rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-zinc-900" onChange={handleInputChange}/></div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Email</label>
                  <div className="relative"><Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-300" size={18} /><input required name="email" type="email" className="w-full bg-zinc-50 rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-zinc-900" onChange={handleInputChange}/></div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1 space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">WhatsApp</label>
                  <input required name="whatsapp" type="tel" className="w-full bg-zinc-50 rounded-2xl py-4 px-4 outline-none focus:ring-2 focus:ring-zinc-900" onChange={handleInputChange}/>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Tanggal</label>
                  <div className="relative"><Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-300" size={16} /><input required name="date" type="date" className="w-full bg-zinc-50 rounded-2xl py-4 pl-11 pr-4 outline-none" onChange={handleInputChange}/></div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Jam Sesi</label>
                  <div className="relative"><Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-300" size={16} /><select required name="time" className="w-full bg-zinc-50 rounded-2xl py-4 pl-11 pr-4 outline-none appearance-none" onChange={handleInputChange}>
                    <option value="">Jam</option>
                    {['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '19:00', '20:00'].map(t => <option key={t} value={t}>{t} WIB</option>)}
                  </select></div>
                </div>
              </div>

              <AnimatePresence>
                {selectedPackage === 'custom' && (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="grid grid-cols-2 gap-4 p-6 bg-sky-50 rounded-[2rem]">
                    <div className="space-y-1"><label className="text-[10px] font-bold text-sky-600">Jml Orang (20k/org)</label><input name="customPeople" type="number" min="1" className="w-full rounded-xl py-2 px-3 outline-none" onChange={handleInputChange}/></div>
                    <div className="space-y-1"><label className="text-[10px] font-bold text-sky-600">Tambahan (10k/10m)</label><select name="extraTime" className="w-full rounded-xl py-2 px-3 outline-none" onChange={handleInputChange}>
                      {[0,1,2,3,4].map(v => <option key={v} value={v}>+{v*10} Menit</option>)}
                    </select></div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* INFORMASI PEMBAYARAN */}
              <div className="space-y-6">
                <div className="p-4 bg-amber-50 border border-amber-100 rounded-2xl flex gap-4 items-start">
                  <AlertCircle className="text-amber-500 shrink-0" size={20} />
                  <div>
                    <p className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-1">Kebijakan Reservasi</p>
                    <p className="text-[11px] text-amber-700 leading-relaxed">
                      Silakan melakukan pembayaran minimal <strong>50% (DP)</strong> dari total biaya untuk mengamankan slot jadwal. Sisa pembayaran dapat dilakukan di studio.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Pilih Metode Transfer</label>
                  <div className="flex gap-4">
                    <button type="button" onClick={() => setPaymentMethod('bank')} className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl border-2 transition-all ${paymentMethod === 'bank' ? 'border-zinc-900 bg-zinc-900 text-white' : 'border-zinc-100'}`}><CreditCard size={18}/> Bank</button>
                    <button type="button" onClick={() => setPaymentMethod('qris')} className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl border-2 transition-all ${paymentMethod === 'qris' ? 'border-zinc-900 bg-zinc-900 text-white' : 'border-zinc-100'}`}><QrCode size={18}/> QRIS</button>
                  </div>

                  <div className="p-6 bg-zinc-50 rounded-[2rem] border border-zinc-100 flex flex-col items-center">
                    {paymentMethod === 'bank' ? (
                      <div className="text-center">
                        <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1 text-sky-600">BCA (Bank Central Asia)</p>
                        <p className="text-2xl font-bold tracking-tighter">1234 5678 90</p>
                        <p className="text-[10px] font-bold text-zinc-500 uppercase mt-1">a/n LINEA STUDIO</p>
                      </div>
                    ) : (
                      <div className="text-center space-y-3">
                        <div className="bg-white p-3 rounded-2xl shadow-sm inline-block">
                          <Image src="/images/qrcode.png" width={160} height={160} alt="QRIS Barcode" className="mx-auto" />
                        </div>
                        <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Scan QR untuk pembayaran DP</p>
                      </div>
                    )}
                  </div>

                  <div className="border-2 border-dashed border-zinc-200 rounded-[2rem] p-8 text-center hover:border-zinc-900 transition-colors relative">
                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" onChange={(e) => setFormData({...formData, paymentProof: e.target.files![0]})} />
                    <Upload className="mx-auto text-zinc-300 mb-2" size={24} />
                    <p className="text-xs font-bold text-zinc-500">{formData.paymentProof ? formData.paymentProof.name : 'Upload Bukti DP (Minimal 50%)'}</p>
                  </div>
                </div>
              </div>

              <button type="submit" className="w-full bg-zinc-900 text-white py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-xs hover:bg-sky-500 transition-all shadow-xl">
                Konfirmasi Reservasi
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}