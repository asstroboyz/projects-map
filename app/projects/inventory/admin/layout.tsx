import Link from "next/link";

const adminMenu = [
  { label: "Dashboard", href: "/projects/inventory/admin" },
  { label: "Barang", href: "/projects/inventory/admin/barang" },
  { label: "Inventaris", href: "/projects/inventory/admin/inventaris" },
  { label: "Pengadaan", href: "/projects/inventory/admin/pengadaan" },
  { label: "Permintaan", href: "/projects/inventory/admin/permintaan-barang" },
  { label: "Laporan", href: "/projects/inventory/admin/laporan" },
  { label: "User", href: "/projects/inventory/admin/user" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-black/40 border-r border-white/10 p-6">
        <h2 className="text-xl font-bold mb-8">
          Inventory Admin
        </h2>

        <nav className="space-y-4">
          {adminMenu.map((m) => (
            <Link
              key={m.href}
              href={m.href}
              className="block text-gray-400 hover:text-white transition"
            >
              {m.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
