"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Card, CardBody } from "@material-tailwind/react";

function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const MTCard = Card as any;
const MTCardBody = CardBody as any;

type DashboardData = {
  totalPermintaan: number;
  stokAtkRendah: number;
  permintaanProses: number;
  permintaanSelesai: number;
  pengadaanProses: number;
  pengadaanSelesai: number;
};

export default function AdminDashboard() {
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    const generate = () =>
      setData({
        totalPermintaan: random(80, 200),
        stokAtkRendah: random(1, 15),
        permintaanProses: random(5, 40),
        permintaanSelesai: random(50, 150),
        pengadaanProses: random(1, 10),
        pengadaanSelesai: random(10, 60),
      });

    generate();
    const interval = setInterval(generate, 150000);
    return () => clearInterval(interval);
  }, []);


  if (!data) return null;

  return (
    <section className="space-y-8">
   
      <div>
        <h1 className="text-3xl font-semibold text-slate-800">
          Dashboard Inventaris Pengadaan Barang
        </h1>

      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

     
        <Link href="/projects/inventory/admin/permintaan-barang">
          <MTCard className="cursor-pointer shadow-sm hover:shadow-md transition">
            <MTCardBody>
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Total Permintaan
              </p>
              <h3 className="mt-3 text-3xl font-semibold text-slate-800">
                {data.totalPermintaan}
              </h3>
            </MTCardBody>
          </MTCard>
        </Link>

        {/* STOK RENDAH */}
        <Link href="/projects/inventory/admin/barang">
          <MTCard className="cursor-pointer border border-rose-200 bg-rose-50 shadow-sm hover:shadow-md transition">
            <MTCardBody>
              <p className="text-xs uppercase tracking-wide text-rose-600">
                ATK Stok &lt; 10
              </p>
              <h3 className="mt-3 text-4xl font-bold text-rose-600">
                {data.stokAtkRendah}
              </h3>
            </MTCardBody>
          </MTCard>
        </Link>

      
        <MTCard className="shadow-sm">
          <MTCardBody>
            <p className="text-xs uppercase tracking-wide text-slate-500">
              Permintaan Diproses
            </p>
            <h3 className="mt-3 text-3xl font-semibold text-slate-800">
              {data.permintaanProses}
            </h3>
          </MTCardBody>
        </MTCard>

      
        <MTCard className="border border-emerald-200 bg-emerald-50 shadow-sm">
          <MTCardBody>
            <p className="text-xs uppercase tracking-wide text-slate-500">
              Permintaan Selesai
            </p>
            <h3 className="mt-3 text-3xl font-semibold text-emerald-600">
              {data.permintaanSelesai}
            </h3>
          </MTCardBody>
        </MTCard>

   
        <MTCard className="shadow-sm">
          <MTCardBody>
            <p className="text-xs uppercase tracking-wide text-slate-500">
              Pengadaan Proses
            </p>
            <h3 className="mt-3 text-3xl font-semibold text-slate-800">
              {data.pengadaanProses}
            </h3>
          </MTCardBody>
        </MTCard>

        <MTCard className="border border-emerald-200 bg-emerald-50 shadow-sm">
          <MTCardBody>
            <p className="text-xs uppercase tracking-wide text-slate-500">
              Pengadaan Selesai
            </p>
            <h3 className="mt-3 text-3xl font-semibold text-emerald-600">
              {data.pengadaanSelesai}
            </h3>
          </MTCardBody>
        </MTCard>

        <MTCard className="bg-slate-50 shadow-sm">
          <MTCardBody>
            <p className="text-xs uppercase tracking-wide text-slate-500">
              Hari Ini
            </p>
            <h3 className="mt-3 text-lg font-semibold text-slate-700">
              {new Date().toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </h3>
          </MTCardBody>
        </MTCard>

      </div>
    </section>
  );
}
