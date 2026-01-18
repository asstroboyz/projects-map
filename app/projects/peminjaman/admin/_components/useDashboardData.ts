"use client";

import { useEffect, useState } from "react";
import { getAll, seedIfEmpty } from "../../lib/peminjamanCache";

/* ================= TYPES ================= */

export type TopBarang = {
  name: string;
  value: number;
};

export type DashboardData = {
  sedangDipinjam: number;
  dikembalikan: number;
  rusak: number;
  tanggal: string;
  topBarang: TopBarang[];
};

/* ================= HOOK ================= */

const STORAGE_KEY = "admin-dashboard-data";

export function useDashboardData() {
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    seedIfEmpty();

    const cached = localStorage.getItem(STORAGE_KEY);
    if (cached) {
      setData(JSON.parse(cached));
      return;
    }

    const peminjaman = getAll();

    // =====================
    // DUMMY CHART DATA
    // =====================
    const dummyTopBarang: TopBarang[] = [
      { name: "Laptop", value: 12 },
      { name: "Proyektor", value: 8 },
      { name: "Kamera", value: 5 },
      { name: "Tablet", value: 3 },
    ];

    const generated: DashboardData = {
      sedangDipinjam: peminjaman.filter(
        (p: any) => p.status === "approved"
      ).length,

      dikembalikan: peminjaman.filter(
        (p: any) => p.status === "dikembalikan"
      ).length,

      rusak: peminjaman.filter(
        (p: any) => p.kondisi === "rusak" || p.kondisi === "hilang"
      ).length,

      tanggal: formatDate(new Date()),

      topBarang: dummyTopBarang,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(generated));
    setData(generated);
  }, []);

  return data;
}

/* ================= UTILS ================= */

function formatDate(date: Date) {
  return date.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
