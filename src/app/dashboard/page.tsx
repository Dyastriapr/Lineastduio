// /app/dashboard/page.tsx

export default function DashboardPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Selamat Datang di Dashboard!</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-sm text-gray-500">Total Pengguna</p>
          <p className="text-3xl font-semibold text-indigo-600">1,234</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-sm text-gray-500">Penjualan Hari Ini</p>
          <p className="text-3xl font-semibold text-green-600">Rp 5.000.000</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-sm text-gray-500">Pesanan Baru</p>
          <p className="text-3xl font-semibold text-yellow-600">12</p>
        </div>
      </div>
      
    </div>
  );
}