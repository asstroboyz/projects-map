"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const roles = [
  {
    key: "admin",
    title: "Admin",
    desc: "Full access: data master, inventaris, pengadaan, laporan.",
    role: "admin",
    path: "/projects/inventory/admin",
  },
  {
    key: "pegawai",
    title: "Pegawai",
    desc: "Akses inventaris dan pengajuan permintaan barang.",
    role: "gudang",
    path: "/projects/inventory/admin",
  },
  {
    key: "petugas",
    title: "Petugas Pengadaan",
    desc: "Kelola proses pengadaan dan laporan.",
    role: "pengadaan",
    path: "/projects/inventory/admin",
  },
];

export default function InventoryRoleSelector() {
  const router = useRouter();

  const handleSelectRole = (role: string, path: string) => {
    // SIMPAN ROLE (cookie)
    document.cookie = `role=${role}; path=/`;

    // LANGSUNG MASUK DASHBOARD
    router.push(path);
  };

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
          {roles.map((r, i) => (
            <motion.button
              key={r.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleSelectRole(r.role, r.path)}
              className="inventory-card text-left cursor-pointer"
            >
              <h3 className="text-2xl font-semibold mb-2">
                {r.title}
              </h3>
              <p className="text-gray-400 text-sm">{r.desc}</p>

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
