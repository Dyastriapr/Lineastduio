// /app/components/Header.tsx (Revisi Ukuran Navbar)

import { Search, Volume2, Bell, MessageSquare } from 'lucide-react'; 

export default function Header() {
  return (
    // Padding sedikit lebih besar (p-4)
    <header className="bg-white  p-4 border-b border-gray-200 sticky top-0 z-10">
      <div className="flex items-center justify-between mx-auto max-w-full">
        
        {/* 1. Kotak Pencarian (Lebih Tinggi/Besar) */}
        <div className="flex-1 max-w-2xl mr-8">
          <div className="relative">
            {/* Ikon Pencarian */}
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            
            <input
              type="text"
              placeholder="Search..."
              // Padding vertikal (py-3) dan padding kiri lebih besar (pl-12)
              className="w-full py-3.5 pl-12 pr-4 bg-gray-100 border border-gray-100 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
            />
          </div>
        </div>
        
        {/* 2. Ikon Aksi dan Profil (Spasi Lebih Besar) */}
        <div className="flex items-center space-x-6"> 
          
          {/* Feedback Icon & Text */}
          <div className="flex items-center space-x-1.5 cursor-pointer text-gray-600 hover:text-gray-900 transition duration-150">
            <Volume2 className="w-5 h-5" />
            <span className="text-base font-medium hidden md:inline">Feedback?</span>
          </div>

          {/* Ikon Aksi */}
          <button className="relative p-1 text-gray-500 hover:text-red-500">
            <Bell className="w-6 h-6" />
            {/* Indikator notifikasi merah */}
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-500"></span>
          </button>
          
          <button className="p-1 text-gray-500 hover:text-blue-500">
            <MessageSquare className="w-6 h-6" />
          </button>
          
          {/* Ikon Profil (Diperbesar) */}
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-purple-500 cursor-pointer">
              <img 
                  src="/path-to-your-profile-image.jpg" 
                  alt="User Profile" 
                  className="object-cover w-full h-full"
              />
          </div>

        </div>
      </div>
    </header>
  );
}