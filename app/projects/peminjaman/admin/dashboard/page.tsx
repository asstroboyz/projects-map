"use client";

import {
  GrCalendar,
  GrCheckmark,
  GrClose,
  GrInProgress,
} from "react-icons/gr";
import { useDashboardData } from "../_components/useDashboardData";

export default function AdminDashboard() {
  const data = useDashboardData();

  if (!data) return null;

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div>
        <p className="text-sm text-gray-500">Selamat Datang Kembali,</p>
        <h1 className="text-2xl font-bold">Administrator</h1>
      </div>

      {/* STAT */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard title="SEDANG DIPINJAM" value={data.sedangDipinjam} color="blue" icon={<GrInProgress />} />
        <StatCard title="SUDAH DIKEMBALIKAN" value={data.dikembalikan} color="green" icon={<GrCheckmark />} />
        <StatCard title="RUSAK / HILANG" value={data.rusak} color="red" icon={<GrClose />} />
        <StatCard title="HARI INI" value={data.tanggal} color="dark" icon={<GrCalendar />} />
      </div>

      {/* CHART */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* BAR */}
        <div className="bg-white rounded-xl border p-5">
          <h3 className="font-semibold mb-6">
            Top Barang yang Sering Dipinjam
          </h3>

          <div className="h-48 flex items-end gap-4">
            {data.topBarang.map((b) => (
              <div key={b.name} className="flex-1 text-center">
                <div
                  className="bg-blue-600 rounded-lg mx-auto transition-all"
                  style={{ height: `${b.value * 28}px` }}
                />
                <p className="text-xs mt-2">{b.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PIE */}
        <div className="bg-white rounded-xl border p-5 flex flex-col items-center">
          <h3 className="font-semibold mb-6 self-start">
            Persentase Peminjaman
          </h3>

          <div className="w-44 h-44 rounded-full bg-slate-800 flex items-center justify-center text-white">
            {data.topBarang[0].name}
          </div>
        </div>
      </div>

      {/* INFO */}
      <div className="bg-white rounded-xl border p-4">
        <h3 className="font-semibold mb-2">Informasi Terbaru</h3>
        <p className="text-sm text-gray-500 italic">
          Belum ada aktivitas terbaru untuk ditampilkan.
        </p>
      </div>
    </div>
  );
}

/* ================= */

function StatCard({ title, value, color, icon }: any) {
  const map: any = {
    blue: "border-blue-500 text-blue-600",
    green: "border-green-500 text-green-600",
    red: "border-red-500 text-red-600",
    dark: "border-slate-700 text-slate-700",
  };

  return (
    <div className={`bg-white rounded-xl border-l-4 p-4 flex justify-between items-center ${map[color]}`}>
      <div>
        <p className="text-xs font-semibold">{title}</p>
        <p className="text-xl font-bold">{value}</p>
      </div>
      <div className="text-2xl">{icon}</div>
    </div>
  );
}
