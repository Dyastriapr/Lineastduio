'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image'; 
import Beams from '@/components/Beams';

// ------------------------------------------------------------------
// Komponen Carousel Teks Sederhana (Telah Disederhanakan)
// ------------------------------------------------------------------
const TEXT_SLIDES = [
  {
    title: "Manage Everything in One System.",
    subtitle: "Integrate finance, operations, and human resources in a single ERP platform."
  },
  {
    title: "Centralized Control. Real-Time Insights.",
    subtitle: "Monitor performance and make informed decisions with live data across all departments."
  },
  {
    title: "Scale Your Business with Confidence.",
    subtitle: "A flexible ERP solution designed to grow alongside your business needs."
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
      className="transition-opacity duration-1000 ease-in-out mt-12" // Tambahkan mt-12 untuk memberi ruang di bawah logo
      style={{ opacity: 1 }} 
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
  // ... (state dan handleLogin tetap sama)
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
    // Log error lengkap di console jika perlu
    console.error("Login error:", err); 
    setError('Terjadi kesalahan jaringan atau server.');
  }
};


  return (
    // Kontainer Utama: full-screen
    <div className="relative w-screen h-screen overflow-hidden">
      
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

      <div className="absolute text-white text-3xl font-bold tracking-widest p-18">
                Dyaz.
            </div>
      <div className="relative z-10 flex h-full flex-col items-end justify-center p-4 md:p-12 md:flex-row md:justify-between"> 
         
        
        
        <div className="hidden md:flex flex-col justify-center w-full md:w-1/2 p-8 text-white relative">
            
              <TextCarousel />
            
          
        </div>
        
        {/* AREA KANAN: Card Login Utama */}
        <div className="w-full max-w-sm md:max-w-lg my-auto 
                        bg-white/95 text-gray-900 
                        shadow-2xl rounded-xl overflow-hidden md:ml-auto h-full">
          
          {/* Header Card (Judul dan Deskripsi) */}
          <div className="p-6 md:p-8">
             <div className="text-3xl font-bold">Welcome to ERP App by Dyaz</div>
             <p className="mt-2 text-gray-700">Login to manage and integrate your business.</p>
          </div>

          
          <div className="px-6 pb-6 md:px-8 md:pb-8"> {/* Padding untuk body card */}
             
             {error && (
                <div className="p-3 text-sm font-medium text-red-700 border border-red-300 bg-red-100 rounded-lg mb-4">
                  {error}
                </div>
              )}

            <form onSubmit={handleLogin} className="space-y-4">
    
                {/* GRUP USERNAME */}
                <div className="space-y-1">
                    <p className='font-bold text-sm text-gray-800'>Username</p>
                    <input
                        type="text"
                        placeholder="Username atau Email"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 
                                    text-gray-900 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500"
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>

                {/* GRUP PASSWORD */}
                <div className="space-y-1">
                    <p className='font-bold text-sm text-gray-800'>Password</p>
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 
                                    text-gray-900 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                {/* CHECKBOX & FORGOT PASSWORD */}
                <div className="flex justify-between items-center text-sm pt-2">
                    
                    {/* Checkbox Remember Me */}
                    <div className="flex items-center">
                        <input 
                            id="remember-me" 
                            name="remember-me" 
                            type="checkbox" 
                            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="remember-me" className="ml-2 text-gray-700">
                            Remember Me
                        </label>
                    </div>

                    {/* Forgot Password Link */}
                    <Link 
                        href="/forgot-password" 
                        className="font-medium text-gray-600 hover:text-gray-500"
                    >
                        Forgot Password?
                    </Link>
                </div>

                {/* BUTTON LOGIN */}
                <button
                    type="submit"
                    className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold 
                                hover:bg-gray-700 transition duration-200 shadow-md mt-6"
                >
                    Login
                </button>
            </form>

            {/* DIVIDER DAN LOGIN WITH GOOGLE */}
            <div className="flex items-center my-6">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-4 text-sm text-gray-500">OR</span>
                <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* BUTTON LOGIN WITH GOOGLE */}
            <button
                type="button"
                className="w-full flex items-center justify-center border border-gray-300 bg-white text-gray-700 py-3 rounded-lg font-semibold 
                            hover:bg-gray-50 transition duration-200 shadow-sm"
                onClick={() => alert('Fungsi Login with Google belum diimplementasikan!')}
            >
                {/* Gunakan Image Next.js */}
                <Image 
                    src="/google-icon.png"
                    alt="Google" 
                    width={20}
                    height={20}
                    className="mr-3"
                />
                Continue with Google
            </button>

            <p className="mt-6 text-sm text-center text-gray-600">
                Belum punya akun?{' '}
                <Link href="/register" className="font-semibold text-gray-600 hover:text-gray-500">
                    Daftar di sini
                </Link>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}