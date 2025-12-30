// /app/components/Sidebar.tsx (Koreksi Logika Switch)

"use client"; 

import { useState, useEffect } from 'react';
import { usePathname, useRouter} from 'next/navigation';
import Link from 'next/link';
import { LayoutGrid, Home, ChevronDown, LogOut } from 'lucide-react'; 

// Import komponen Sidebar spesifik
import SidebarAdmin from './SidebarAdmin'; 
import SidebarHRD from './SidebarHRD'; 

export default function Sidebar() {
    const pathname = usePathname();
    const router = useRouter();
    const [currentUserRole, setCurrentUserRole] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    
    const isHomeActive = pathname === '/dashboard' || pathname === '/'; 
    
  
    useEffect(() => {
        const role = localStorage.getItem('user_role');
        if (role) {
        
            setCurrentUserRole(role.toUpperCase()); 
        }
        setLoading(false);
    }, []);

    let ActiveSidebarComponent = null;
    
 
    switch (currentUserRole) {
 
        case 'ADMIN': 
            ActiveSidebarComponent = SidebarAdmin;
            break;
        
        case 'HR':
            ActiveSidebarComponent = SidebarHRD;
            break;
        
        default:
            ActiveSidebarComponent = null; 
    }

    const handleLogout = () => {
       
        localStorage.removeItem('user_role');
        
        
        
       
        setCurrentUserRole(null);
        
    
        router.push('/login');
    };

    return (
        <div className="w-72 bg-white border-r border-gray-200 h-screen flex flex-col p-6 overflow-hidden">
            
            {/* 1. Bagian Atas: Logo dan Info Perusahaan */}
            <div className="flex items-center justify-between pb-6 mb-6"> 
                <div className="flex items-center space-x-3">
                    <button className="p-2 bg-gray-100 rounded-lg">
                        <LayoutGrid className="w-6 h-6 text-gray-700" />
                    </button>
                    <div className='leading-tight'>
                        <h1 className="font-semibold text-xl text-gray-900">Dyaz Tri A.</h1> 
                        <p className="text-sm text-gray-500">{currentUserRole || 'Guest'}</p> 
                    </div>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-500 cursor-pointer" />
            </div>

            {/* 2. Item Home */}
            {currentUserRole && (
                <Link 
                    href="/dashboard" 
                    className={`
                        flex items-center space-x-3 py-3 px-3 rounded-xl text-md font-medium mb-4
                        ${isHomeActive ? 'bg-blue-100 text-blue-800' : 'text-gray-700 hover:bg-gray-100'}
                    `}
                >
                    <Home className="w-6 h-6" />
                    <span>Home</span>
                </Link>
            )}
            
            {/* 3. Container Menu yang Dapat Di-scroll */}
            <div className="flex-1 overflow-y-auto pr-2">
                {loading ? (
                    <p className='text-sm text-gray-500 mt-4'>Memuat data pengguna...</p>
                ) : ActiveSidebarComponent ? (
                    <ActiveSidebarComponent /> 
                ) : (
                    <p className='text-sm text-red-500 mt-4'></p>
                )}
            </div>

            {/* 4. Bagian Bawah */}
            <div className="pt-6 border-t border-gray-200">
                <button 
                    onClick={handleLogout} // <-- Panggil fungsi logout di sini
                    className="flex items-center w-full space-x-3 p-2 rounded-xl text-lg 
                               text-gray-900 hover:bg-red-50 hover:text-red-600 transition duration-150"
                >
                    <LogOut className="w-6 h-6" />
                    <span className='font-semibold'>Logout</span>
                </button>
            </div>
        </div>
    );
}