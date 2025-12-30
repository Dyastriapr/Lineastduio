// /app/components/SidebarAdmin.tsx (HANYA BERISI MENU)

// Kita hanya perlu mengimpor NavItem (asumsi dipindahkan ke file terpisah)
// dan ikon yang diperlukan.
import { NavItem } from './NavItem'; // Asumsi NavItem sudah diimpor dari file terpisah
import { 
  Users, CreditCard, Box, Briefcase, BarChartBig, 
  Code, Eye, Settings, Clock, ChevronDown, ChevronUp, Filter, User
} from 'lucide-react'; 

// Data Menu (Ini adalah data yang sama dengan yang ada di kode Anda, disalin ke sini)
const menuItems = {
  main: [
    { name: 'Akuntansi', icon: Users, href: '/dashboard/accounts' }, 
   { 
        name: 'Buku Besar', 
        icon: CreditCard, 
        href: '#', // Tidak ada href untuk item utama
        submenu: [ // <-- TAMBAHKAN SUBMENU
            { name: 'Chart of Accounts', href: '/dashboard/buku-besar/coa' },
            { name: 'Jurnal Umum', href: '/dashboard/buku-besar/jurnal-umum' },
            { name: 'Laporan Buku Besar', href: '/dashboard/buku-besar/laporan' },
            { name: 'Neraca Saldo', href: '/dashboard/buku-besar/saldo' },
        ]
    },
    { name: 'Utang Usaha', 
      icon: Box, 
      href: '#', submenu: [ 
            { name: 'Manajemen Vendor', href: '/dashboard/payments/tabungan' },
            { name: 'Input Faktur Pembelian', href: '/dashboard/payments/jurnal-umum' },
            { name: 'Proses Pembayaran Utang', href: '/dashboard/payments/jurnal-umum' },
            { name: 'Laporan Umur Utang', href: '/dashboard/payments/posting' },
        ]}, 
    { name: 'Piutang Usaha', icon: Briefcase, href: '#', submenu: [ 
            { name: 'Manajemen Pelanggan', href: '/dashboard/payments/tabungan' },
            { name: 'Input Faktur Penjualan', href: '/dashboard/payments/jurnal-umum' },
            { name: 'Pencatatan Penerimaan Kas', href: '/dashboard/payments/jurnal-umum' },
            { name: 'Laporan Umur Piutang', href: '/dashboard/payments/posting' },
        ] },
    { name: 'Kas & Bank', icon: Box, href: '#', submenu: [ 
            { name: 'Input Penerimaan Kas Lain', href: '/dashboard/payments/tabungan' },
            { name: 'Input Pengeluaran Kas Lain', href: '/dashboard/payments/jurnal-umum' },
            { name: 'Rekonsiliasi Bank', href: '/dashboard/payments/jurnal-umum' },
        ]},
    { name: 'Pelaporan Keuangan', icon: BarChartBig, href: '#', submenu: [ 
            { name: 'Laporan Laba Rugi', href: '/dashboard/payments/tabungan' },
            { name: 'Laporan Posisi Keuangan ', href: '/dashboard/payments/jurnal-umum' },
            { name: 'Laporan Arus Kas', href: '/dashboard/payments/jurnal-umum' },
        ] },
  ],
  hrd :[
    { name: 'Human Resource', icon: Users, href: '/dashboard/accounts' },
    
    { name: 'Pelaporan Keuangan', icon: BarChartBig, href: '#', submenu: [ 
            { name: 'Laporan Laba Rugi', href: '/dashboard/payments/tabungan' },
            { name: 'Laporan Posisi Keuangan ', href: '/dashboard/payments/jurnal-umum' },
            { name: 'Laporan Arus Kas', href: '/dashboard/payments/jurnal-umum' },
        ] },],
  
  general: [
    { name: 'Developers', icon: Code, href: '/dashboard/developers', isExpandable: true },
    { name: 'View Test Data', icon: Eye, href: '/dashboard/test-data' },
    { name: 'Settings', icon: Settings, href: '/dashboard/settings' },
  ],
  updates: [
    { name: 'Changelog', icon: Clock, href: '/dashboard/changelog' },
  ],
};


export default function SidebarAdmin() {

  
  return (
    // Gunakan <>, tidak ada div wrapper dengan styling layout di sini
    <> 
      {/* 1. Main Menu */}
      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-2 mb-2 px-3">
        Menu Akuntansi
      </h3>
      <nav className="flex flex-col">
        {menuItems.main.map((item) => (
          <NavItem key={item.name} item={item} />
        ))}
      </nav>

      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-2 mb-2 px-3">
        Menu HRD
      </h3>
      <nav className="flex flex-col">
        {menuItems.hrd.map((item) => (
          <NavItem key={item.name} item={item} />
        ))}
      </nav>

      {/* 2. General Menu */}
      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-6 mb-2 px-3">
        General
      </h3>
      <nav className="flex flex-col space-y-2">
        {menuItems.general.map((item) => (
          <NavItem key={item.name} item={item} />
        ))}
      </nav>

      {/* 3. Updates Menu */}
      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-6 mb-2 px-3">
        Updates
      </h3>
      <nav className="flex flex-col space-y-2">
        {menuItems.updates.map((item) => (
          <NavItem key={item.name} item={item} />
        ))}
      </nav>
    </>
  );
}