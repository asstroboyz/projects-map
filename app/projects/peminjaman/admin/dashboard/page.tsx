"use client";

import { useDashboardData } from "../_components/useDashboardData";
import BarChart from "../_components/charts/BarChart";
import PieChart from "../_components/charts/PieChart";

export default function AdminDashboard() {
  const data = useDashboardData();
  if (!data) return null;

  // ⬅️ HARUS DI SINI
  const barData = data.topBarang.map((b) => ({
    label: b.name,
    value: b.value,
  }));

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div>
        <p className="text-sm text-slate-400">
          Data per {data.tanggal}
        </p>
        <h1 className="text-2xl font-semibold">
          Dashboard Administrator
        </h1>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Stat title="Sedang Dipinjam" value={data.sedangDipinjam} />
        <Stat title="Dikembalikan" value={data.dikembalikan} />
        <Stat title="Rusak / Hilang" value={data.rusak} />
      </div>

      {/* CHART */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border">
          <h3 className="font-semibold mb-4">Top Barang Dipinjam</h3>
          <BarChart data={barData} />
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border">
          <h3 className="font-semibold mb-4">Highlight</h3>
          <PieChart
            label={data.topBarang[0]?.name}
            value={data.topBarang[0]?.value}
          />
        </div>
      </div>
    </div>
  );
}

/* ===== STAT CARD ===== */

function Stat({
  title,
  value,
}: {
  title: string;
  value: number;
}) {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border">
      <p className="text-sm text-slate-400">{title}</p>
      <p className="text-3xl font-semibold mt-2">{value}</p>
    </div>
  );
}
