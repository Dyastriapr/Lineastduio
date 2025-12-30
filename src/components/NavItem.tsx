'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, ChevronUp, LucideIcon } from 'lucide-react';

// 1. Definisikan Interface untuk Tipe Data
interface SubmenuItem {
  name: string;
  href: string;
}

interface NavItemData {
  name: string;
  href: string;
  icon?: LucideIcon; // Tipe khusus untuk icon dari Lucide
  submenu?: SubmenuItem[];
  isExpanded?: boolean;
}

// 2. Gunakan Interface pada Props
export const NavItem = ({ item }: { item: NavItemData }) => {
  const Icon = item.icon;
  const pathname = usePathname();
  
  // State ekspansi
  const [isExpanded, setIsExpanded] = useState(
    item.submenu ? item.isExpanded || false : false 
  ); 

  // Cek apakah aktif (termasuk cek submenu)
  const isActive = pathname.startsWith(item.href) || 
                   (item.submenu && item.submenu.some((sub) => pathname.startsWith(sub.href)));
  
  const isExpandable = !!item.submenu;

  const handleToggle = () => {
    if (isExpandable) {
      setIsExpanded(!isExpanded);
    }
  };

  const NavContent = (
    <div 
        className={`
          flex items-center space-x-3 py-3 px-3 rounded-xl transition duration-150 
          text-md font-medium cursor-pointer ${isExpandable ? 'justify-between' : ''}
          ${isActive 
            ? 'bg-blue-100 text-blue-800' 
            : 'text-gray-700 hover:bg-gray-100'
          }
        `}
        onClick={handleToggle}
    >
      {Icon && <Icon className="w-6 h-6" />}
      <span>{item.name}</span>
      {isExpandable && (
        <span className='ml-auto'>
          {isExpanded ? (
            <ChevronUp className="w-4 h-4 text-gray-500" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-500" />
          )}
        </span>
      )}
    </div>
  );

  return (
    <div>
      {/* Render Item Utama */}
      {isExpandable ? (
        NavContent 
      ) : (
        <Link href={item.href} className="block">{NavContent}</Link>
      )}

      {/* Render Submenu */}
      {isExpandable && isExpanded && item.submenu && (
        <nav className="flex flex-col space-y-1 ml-6 mt-1 mb-2 border-l border-gray-200 pl-3">
          {item.submenu.map((subItem) => {
            const isSubActive = pathname.startsWith(subItem.href);
            return (
              <Link 
                key={subItem.name}
                href={subItem.href}
                className={`
                  text-sm py-2 px-2 rounded-lg transition duration-150
                  ${isSubActive ? 'text-blue-700 font-semibold bg-blue-50' : 'text-gray-600 hover:text-blue-700 hover:bg-gray-100'}
                `}
              >
                {subItem.name}
              </Link>
            );
          })}
        </nav>
      )}
    </div>
  );
};