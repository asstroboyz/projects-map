"use client";

import { useEffect, useState } from "react";

type DashboardData = {
  sedangDipinjam: number;
  dikembalikan: number;
  rusak: number;
  tanggal: string;
  topBarang: { name: string; value: number }[];
};

const STORAGE_KEY = "admin-dashboard-data";

export function useDashboardData() {
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    const cached = sessionStorage.getItem(STORAGE_KEY);

    if (cached) {
      setData(JSON.parse(cached));
      return;
    }

    const generated: DashboardData = {
      sedangDipinjam: rand(0, 8),
      dikembalikan: rand(1, 12),
      rusak: rand(0, 3),
      tanggal: formatDate(new Date()),
      topBarang: shuffle([
        { name: "Laptop", value: rand(2, 8) },
        { name: "Proyektor", value: rand(1, 5) },
        { name: "Arduino Kit", value: rand(1, 5) },
        { name: "Multimeter", value: rand(0, 4) },
        { name: "Soldering Station", value: rand(0, 3) },
      ]),
    };

    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(generated));
    setData(generated);
  }, []);

  return data;
}

/* ================= utils ================= */

function rand(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle<T>(arr: T[]) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function formatDate(date: Date) {
  return date.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
