"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Role = "admin" | "gudang" | "pengadaan";

const MENU = {
  admin: [
    { label: "Dashboard", href: "/projects/inventory/admin" },
    { label: "Barang", href: "/projects/inventory/admin/barang" },
    { label: "Inventaris", href: "/projects/inventory/admin/inventaris" },
    { label: "Pengadaan", href: "/projects/inventory/admin/pengadaan" },
    { label: "Permintaan Barang", href: "/projects/inventory/admin/permintaan-barang" },
    { label: "Laporan", href: "/projects/inventory/admin/laporan" },
    { label: "Users", href: "/projects/inventory/admin/users" },
  ],
  gudang: [
    { label: "Inventaris", href: "/projects/inventory/admin/inventaris" },
    { label: "Permintaan Barang", href: "/projects/inventory/admin/permintaan-barang" },
  ],
  pengadaan: [
    { label: "Permintaan Barang", href: "/projects/inventory/admin/permintaan-barang" },
    { label: "Pengadaan", href: "/projects/inventory/admin/pengadaan" },
  ],
};

export default function Sidebar({ role }: { role: Role }) {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r bg-white">
      <div className="p-4 font-semibold text-slate-700">
        Inventory
      </div>

      <nav className="px-2 space-y-1">
        {MENU[role].map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block rounded px-3 py-2 text-sm
                ${active
                  ? "bg-sky-100 text-sky-700 font-medium"
                  : "text-slate-600 hover:bg-slate-100"
                }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
