// /app/dashboard/layout.tsx
// Semua halaman di dalam /app/dashboard akan menggunakan layout ini.

import Sidebar from '@/components/Sidebar';
import Header from '@/components/Navbar'; // Impor Header jika Anda membuatnya

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* 1. Kiri: Sidebar */}
      <Sidebar /> 
      
      {/* 2. Kanan: Konten Utama */}
      <main className="flex-1 flex flex-col bg-gray-50">
        
        {/* Header/Navbar (Opsional) */}
        <Header /> 
        
        {/* Konten Halaman Sebenarnya */}
        <div className="p-6 flex-1 overflow-y-auto">
          {children} 
        </div>
      </main>
    </div>
  );
}