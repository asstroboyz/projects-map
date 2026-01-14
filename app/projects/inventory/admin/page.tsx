export default function AdminDashboard() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">
        Dashboard Admin
      </h1>

      <p className="text-gray-400 mb-10">
        Ringkasan sistem inventaris dan pengadaan barang.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="inventory-card">
          <p className="text-gray-400 text-sm">Total Barang</p>
          <h3 className="text-3xl font-bold mt-2">1.248</h3>
        </div>

        <div className="inventory-card">
          <p className="text-gray-400 text-sm">Permintaan Aktif</p>
          <h3 className="text-3xl font-bold mt-2">32</h3>
        </div>

        <div className="inventory-card">
          <p className="text-gray-400 text-sm">Pengadaan Berjalan</p>
          <h3 className="text-3xl font-bold mt-2">7</h3>
        </div>
      </div>
    </section>
  );
}
