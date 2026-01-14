"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const roles = [
  {
    key: "admin",
    title: "Admin",
    desc: "Full access: data master, inventaris, pengadaan, laporan.",
    path: "/projects/inventory/admin",
  },
  {
    key: "pegawai",
    title: "Pegawai",
    desc: "Akses inventaris dan pengajuan permintaan barang.",
    path: "/projects/inventory/pegawai",
  },
  {
    key: "petugas",
    title: "Petugas Pengadaan",
    desc: "Kelola proses pengadaan dan laporan.",
    path: "/projects/inventory/petugas-pengadaan",
  },
];

export default function InventoryLoginSelector() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold mb-4">
            Sistem Inventaris & Pengadaan
          </h1>
          <p className="text-gray-400">
            Pilih peran untuk masuk ke dalam sistem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roles.map((role, i) => (
            <motion.button
              key={role.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => router.push(role.path)}
              className="inventory-card text-left cursor-pointer"
            >
              <h3 className="text-2xl font-semibold mb-2">
                {role.title}
              </h3>
              <p className="text-gray-400 text-sm">{role.desc}</p>

              <span className="inline-block mt-6 text-accent-gold font-medium">
                Masuk →
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </main>
  );
}
