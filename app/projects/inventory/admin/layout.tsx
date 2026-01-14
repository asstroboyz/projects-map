import Link from "next/link";
type LinkMenu = {
  type: "link";
  label: string;
  href: string;
};

type GroupMenu = {
  type: "group";
  label: string;
  items: {
    label: string;
    href: string;
  }[];
};

type HeadingMenu = {
  type: "heading";
  label: string;
};

type DividerMenu = {
  type: "divider";
};

type AdminMenu =
  | LinkMenu
  | GroupMenu
  | HeadingMenu
  | DividerMenu;

const adminMenu: AdminMenu[] = [
  {
    type: "link",
    label: "Dashboard",
    href: "/projects/inventory/admin",
  },
  {
    type: "link",
    label: "Daftar Pengguna",
    href: "/projects/inventory/admin/user",
  },
  {
    type: "divider",
  },
  {
    type: "heading",
    label: "Interface",
  },
  {
    type: "group",
    label: "Master Data",
    items: [
      {
        label: "Barang Inventaris",
        href: "/projects/inventory/admin/inventaris",
      },
      {
        label: "Barang ATK",
        href: "/projects/inventory/admin/barang",
      },
      {
        label: "Barang ATK Masuk",
        href: "/projects/inventory/admin/trans-masuk",
      },
      {
        label: "Barang ATK Keluar",
        href: "/projects/inventory/admin/trans-keluar",
      },
    ],
  },
  {
    type: "divider",
  },
  {
    type: "heading",
    label: "Kelola",
  },
  {
    type: "group",
    label: "Permintaan Barang",
    items: [
      {
        label: "Permintaan Barang",
        href: "/projects/inventory/admin/permintaan-barang",
      },
      {
        label: "Permintaan Barang Masuk",
        href: "/projects/inventory/admin/permintaan-masuk",
      },
      {
        label: "Permintaan Barang Diproses",
        href: "/projects/inventory/admin/permintaan-proses",
      },
      {
        label: "Permintaan Barang Selesai",
        href: "/projects/inventory/admin/permintaan-selesai",
      },
    ],
  },
  {
    type: "link",
    label: "Pengadaan Barang",
    href: "/projects/inventory/admin/pengadaan",
  },
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
          {adminMenu.map((item, idx) => {
            if (item.type === "divider") {
              return (
                <hr
                  key={idx}
                  className="border-white/10"
                />
              );
            }

            if (item.type === "heading") {
              return (
                <div
                  key={idx}
                  className="text-xs uppercase tracking-widest text-gray-500"
                >
                  {item.label}
                </div>
              );
            }

            if (item.type === "group") {
              return (
                <div key={idx} className="space-y-2">
                  <div className="text-gray-300 font-medium">
                    {item.label}
                  </div>

                  <div className="ml-3 space-y-1">
                    {item.items.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block text-gray-400 hover:text-white transition text-sm"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className="block text-gray-400 hover:text-white transition"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}
