import './globals.css';
import type { Metadata } from 'next'; // Tambahkan import ini

// Pengaturan Nama Aplikasi dan SEO
export const metadata: Metadata = {
  title: 'LineaStudio | Self Photo Studio Premium Bogor',
  description: 'Abadikan momen terbaikmu dengan privasi penuh di LineaStudio. Self-photo studio dengan kualitas kamera profesional dan lighting terbaik.',
  icons: {
    icon: '.images/LINASTUDIO.png', // Ikon tab browser (taruh file .ico di folder public)
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased font-['Plus_Jakarta_Sans']">
        {children}
      </body>
    </html>
  );
}