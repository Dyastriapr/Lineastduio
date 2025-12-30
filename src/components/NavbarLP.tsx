'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Import icon Menu dan Close

export default function NavbarLP() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State untuk menu mobile

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-sm py-3 shadow-sm border-b border-zinc-100' 
        : 'bg-white/50 backdrop-blur-[2px] py-4 border-b border-transparent' 
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-black tracking-tighter text-black z-[60]">
          LINEA<span className="font-thin">STUDIO</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center">
          <Link 
            href="/booking" 
            className="text-[11px] font-bold uppercase tracking-[0.2em] text-black border border-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition-all duration-300"
          >
            Reservasi
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden z-[60] text-black p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-white z-[50] flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}>
          <div className="flex flex-col items-center gap-8">
            <Link 
              href="/" 
              onClick={() => setIsOpen(false)}
              className="text-2xl font-['Playfair_Display'] italic text-zinc-400 hover:text-black transition-colors"
            >
              Beranda
            </Link>
            <Link 
              href="/booking" 
              onClick={() => setIsOpen(false)}
              className="text-3xl font-bold uppercase tracking-widest text-black border-b-2 border-black pb-2"
            >
              Reservasi
            </Link>
            
            {/* Social Media Link di Mobile Menu */}
            <div className="mt-10 flex gap-6 text-zinc-400">
               <span className="text-xs uppercase tracking-[0.3em]">Instagram</span>
               <span className="text-xs uppercase tracking-[0.3em]">WhatsApp</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}