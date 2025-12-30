'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image'; 
import Beams from '@/components/Beams';

// ------------------------------------------------------------------
// Komponen Carousel Teks (Copywriting Khusus Admin Self Studio)
// ------------------------------------------------------------------
const TEXT_SLIDES = [
  {
    title: "Capture Every Moment, Manage Every Detail.",
    subtitle: "Pantau jadwal sesi, ketersediaan room, dan transaksi harian dalam satu dashboard terintegrasi."
  },
  {
    title: "Real-Time Booking & Session Control.",
    subtitle: "Kelola reservasi pelanggan dan durasi sesi secara otomatis untuk efisiensi operasional studio."
  },
  {
    title: "Seamless Asset & Print Management.",
    subtitle: "Atur penyimpanan file digital hingga stok kertas cetak tanpa perlu repot mencatat manual."
  },
];

const TextCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % TEXT_SLIDES.length);
    }, 5000); 

    return () => clearInterval(timer);
  }, []);

  const currentSlide = TEXT_SLIDES[currentIndex];

  return (
    <div 
      key={currentIndex} 
      className="animate-in fade-in duration-1000 mt-12"
    >
      <h2 className="text-5xl font-extrabold leading-tight mb-4">
        {currentSlide.title}
      </h2>
      <p className="text-xl font-light text-gray-300">
        {currentSlide.subtitle}
      </p>
    </div>
  );
};
// ------------------------------------------------------------------

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        const userRole = data.user.role; 
        localStorage.setItem('user_role', userRole);
        router.push('/dashboard');
      } else {
        setError(data.message || 'Login gagal. Cek username dan password Anda.');
      }
    } catch (err) {
      console.error("Login error:", err); 
      setError('Terjadi kesalahan jaringan atau server.');
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* Background Beams */}
      <div className="absolute inset-0 z-0">
        <Beams
          beamWidth={3}
          beamHeight={30}
          beamNumber={20}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
      </div>

      {/* Brand Logo / Name */}
      <div className="absolute text-white text-3xl font-bold tracking-widest p-12 md:p-18 z-20">
        LINEASTUDIO
      </div>

      <div className="relative z-10 flex h-full flex-col items-end justify-center p-4 md:p-12 md:flex-row md:justify-between"> 
        
        {/* AREA KIRI: Carousel (Desktop Only) */}
        <div className="hidden md:flex flex-col justify-center w-full md:w-1/2 p-8 text-white relative">
          <TextCarousel />
        </div>
        
        {/* AREA KANAN: Card Login Admin */}
        <div className="w-full max-w-sm md:max-w-lg my-auto 
                        bg-white/95 text-gray-900 
                        shadow-2xl rounded-3xl overflow-hidden md:ml-auto">
          
          <div className="p-8 md:p-12">
             <div className="text-3xl font-['Playfair_Display',serif] font-bold">Admin Login</div>
             <p className="mt-2 text-gray-600 font-medium">Selamat datang kembali! Masuk untuk mengelola operasional Linea Studio.</p>
          
             {error && (
                <div className="mt-6 p-3 text-sm font-medium text-red-700 border border-red-300 bg-red-50 rounded-xl">
                  {error}
                </div>
              )}

            <form onSubmit={handleLogin} className="space-y-5 mt-8">
                <div className="space-y-1">
                    <p className='font-bold text-xs uppercase tracking-widest text-gray-500'>Administrator Username</p>
                    <input
                        type="text"
                        placeholder="Masukkan username"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3.5 
                                    text-gray-900 focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition-all"
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>

                <div className="space-y-1">
                    <p className='font-bold text-xs uppercase tracking-widest text-gray-500'>Security Password</p>
                    <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3.5 
                                    text-gray-900 focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition-all"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <div className="flex justify-between items-center text-sm pt-2">
                    <div className="flex items-center">
                        <input 
                            id="remember-me" 
                            name="remember-me" 
                            type="checkbox" 
                            className="h-4 w-4 text-zinc-900 border-gray-300 rounded focus:ring-zinc-900"
                        />
                        <label htmlFor="remember-me" className="ml-2 text-gray-600">
                            Tetap masuk
                        </label>
                    </div>

                    <Link 
                        href="/forgot-password" 
                        className="font-medium text-gray-400 hover:text-zinc-900 transition-colors"
                    >
                        Lupa password?
                    </Link>
                </div>

                <button
                    type="submit"
                    className="w-full bg-zinc-900 text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs
                                hover:bg-zinc-800 transition duration-300 shadow-lg mt-6 active:scale-[0.98]"
                >
                    Sign In to Dashboard
                </button>
            </form>

            <div className="mt-10 pt-8 border-t border-gray-100">
               <p className="text-xs text-center text-gray-400 font-medium italic">
                  "Capture your true self in total privacy." <br/>
                  <span className="mt-2 block not-italic font-bold text-gray-200 uppercase tracking-tighter">Linea Studio ERP v1.0</span>
               </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}