"use client";

import { Menu, Sun, Moon } from "lucide-react";
import { usePathname } from "next/navigation";

function getTitle(pathname: string) {
  if (pathname.includes("/dashboard")) return "Dashboard";
  if (pathname.includes("/list-barang")) return "List Barang";
  if (pathname.includes("/manage-users")) return "Manage Users";
  return "Admin Panel";
}

type Props = {
  collapsed: boolean;
  onToggleSidebar: () => void;
  onToggleDark: () => void;
};

export default function Header({
  collapsed,
  onToggleSidebar,
  onToggleDark,
}: Props) {
  const pathname = usePathname();

  // 🔑 REAL-TIME CHECK FROM DOM
  const isDark =
    typeof window !== "undefined" &&
    document.documentElement.classList.contains("dark");

  return (
    <header className="h-14 bg-white dark:bg-slate-800 border-b dark:border-slate-700 px-6 flex items-center justify-between transition-colors duration-300">
      {/* LEFT */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700"
        >
          <Menu size={18} />
        </button>

        <div>
          <h1 className="text-lg font-semibold">
            {getTitle(pathname)}
          </h1>
          <p className="text-xs text-slate-500">
            Manajemen Peminjaman
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleDark}
          className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700"
          title="Toggle theme"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <div className="flex items-center gap-2">
          <div className="text-right">
            <p className="text-sm font-medium">
              Administrator
            </p>
            <p className="text-xs text-slate-500">
              Admin
            </p>
          </div>

          <div className="w-8 h-8 rounded-full bg-yellow-400 text-black flex items-center justify-center font-semibold text-sm">
            A
          </div>
        </div>
      </div>
    </header>
  );
}
