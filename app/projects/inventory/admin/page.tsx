"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function AdminDashboard() {
  const [data, setData] = useState({
    totalPermintaan: random(80, 200),
    stokAtkRendah: random(1, 15),
    permintaanProses: random(5, 40),
    permintaanSelesai: random(50, 150),
    pengadaanProses: random(1, 10),
    pengadaanSelesai: random(10, 60),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData({
        totalPermintaan: random(80, 200),
        stokAtkRendah: random(1, 15),
        permintaanProses: random(5, 40),
        permintaanSelesai: random(50, 150),
        pengadaanProses: random(1, 10),
        pengadaanSelesai: random(10, 60),
      });
    }, 150000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <h1 className="text-3xl font-bold mb-2">
        Dashboard Admin
      </h1>

      <p className="text-gray-400 mb-10">
        Ringkasan sistem inventaris dan pengadaan barang (dummy data).
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Link href="/projects/inventory/admin/permintaan-barang">
          <div className="inventory-card cursor-pointer">
            <p className="text-gray-400 text-sm uppercase">
              Total Permintaan Barang
            </p>
            <h3 className="text-3xl font-bold mt-2">
              {data.totalPermintaan}
            </h3>
          </div>
        </Link>

        <Link href="/projects/inventory/admin/barang">
          <div className="inventory-card cursor-pointer border border-red-500/30">
            <p className="text-gray-400 text-sm uppercase">
              ATK Stok &lt; 10
            </p>
            <h3 className="text-3xl font-bold mt-2 text-red-500">
              {data.stokAtkRendah}
            </h3>
          </div>
        </Link>

        <Link href="/projects/inventory/admin/permintaan-proses">
          <div className="inventory-card cursor-pointer">
            <p className="text-gray-400 text-sm uppercase">
              Permintaan Diproses
            </p>
            <h3 className="text-3xl font-bold mt-2">
              {data.permintaanProses}
            </h3>
          </div>
        </Link>

        <Link href="/projects/inventory/admin/permintaan-selesai">
          <div className="inventory-card cursor-pointer">
            <p className="text-gray-400 text-sm uppercase">
              Permintaan Selesai
            </p>
            <h3 className="text-3xl font-bold mt-2">
              {data.permintaanSelesai}
            </h3>
          </div>
        </Link>

        <Link href="/projects/inventory/admin/pengadaan">
          <div className="inventory-card cursor-pointer">
            <p className="text-gray-400 text-sm uppercase">
              Pengadaan Proses
            </p>
            <h3 className="text-3xl font-bold mt-2">
              {data.pengadaanProses}
            </h3>
          </div>
        </Link>

        <Link href="/projects/inventory/admin/pengadaan">
          <div className="inventory-card cursor-pointer">
            <p className="text-gray-400 text-sm uppercase">
              Pengadaan Selesai
            </p>
            <h3 className="text-3xl font-bold mt-2">
              {data.pengadaanSelesai}
            </h3>
          </div>
        </Link>

        <div className="inventory-card">
          <p className="text-gray-400 text-sm uppercase">
            Hari Ini
          </p>
          <h3 className="text-xl font-bold mt-2">
            {new Date().toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </h3>
        </div>
      </div>
    </section>
  );
}
