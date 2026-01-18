"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  GrDashboard,
  GrUserAdmin,
  GrAction,
  GrList,
  GrHadoop,
} from "react-icons/gr";
import { FaArrowAltCircleLeft } from "react-icons/fa";

type Props = {
  dark: boolean;
  collapsed: boolean;
  setCollapsed: (v: boolean) => void;
};

export default function AdminSidebar({
  dark,
  collapsed,
  setCollapsed,
}: Props) {
  // ===============================
  // HYDRATION GUARD
  // ===============================
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const pathname = usePathname();

  // ===============================
  // HELPER: active route logic
  // ===============================
  const isRouteActive = (href: string, exact = false) => {
    if (exact) return pathname === href;
    return pathname === href || pathname.startsWith(href + "/");
  };

  const isPeminjamanRoute =
    pathname.startsWith("/projects/peminjaman/admin/") &&
    !pathname.endsWith("/dashboard");
  const isDashboardActive = () => {
    return (
      pathname === "/projects/peminjaman/admin" ||
      pathname === "/projects/peminjaman/admin/dashboard"
    );
  };

  // ===============================
  // MENU ITEM
  // ===============================
  const Item = ({
    href,
    icon,
    label,
    exact = false,
  }: {
    href: string;
    icon: React.ReactNode;
    label: string;
    exact?: boolean;
  }) => {
    const active = isRouteActive(href, exact);

    return (
      <Link
        href={href}
        className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors
          ${active
            ? dark
              ? "bg-slate-700 text-yellow-400"
              : "bg-yellow-100 text-yellow-800"
            : dark
              ? "text-gray-300 hover:bg-slate-700"
              : "text-gray-700 hover:bg-gray-100"
          }`}
      >
        <span className="text-lg">{icon}</span>
        {!collapsed && <span>{label}</span>}
      </Link>
    );
  };

  // ===============================
  // RENDER
  // ===============================
  return (
    <aside
      className={`transition-all duration-300 ${collapsed ? "w-16" : "w-64"
        } ${dark
          ? "bg-slate-900 border-yellow-500/30"
          : "bg-white border-gray-200"
        } border-r`}
    >
      {/* BRAND */}
      <div className="flex items-center justify-between px-3 py-4">
        {!collapsed && (
          <span
            className={`font-semibold ${dark ? "text-yellow-400" : "text-yellow-600"
              }`}
          >
            LAB ESAE
          </span>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={`px-2 py-1 text-sm rounded border ${dark
            ? "border-slate-600 hover:bg-slate-700"
            : "border-gray-300 hover:bg-gray-100"
            }`}
        >
          {collapsed ? "➡" : "⬅"}
        </button>
      </div>

      {/* MAIN MENU */}
      <Link
        href="/projects/peminjaman/admin/dashboard"
        className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors
    ${isDashboardActive()
            ? dark
              ? "bg-slate-700 text-yellow-400"
              : "bg-yellow-100 text-yellow-800"
            : dark
              ? "text-gray-300 hover:bg-slate-700"
              : "text-gray-700 hover:bg-gray-100"
          }`}
      >
        <span className="text-lg">
          <GrDashboard />
        </span>
        {!collapsed && <span>Dashboard</span>}
      </Link>

      <Item
        href="/projects/peminjaman/admin/manage-users"
        icon={<GrUserAdmin />}
        label="Manage Users"
      />

      {/* INTERFACE */}
      {!collapsed && (
        <div
          className={`px-4 mt-4 text-xs font-semibold ${dark ? "text-yellow-400" : "text-gray-500"
            }`}
        >
          INTERFACE
        </div>
      )}

      {/* COMPONENT MASTER */}
      <Disclosure defaultOpen={pathname.includes("/component-master")}>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`flex w-full items-center justify-between px-3 py-2 rounded-md transition-colors
                ${dark
                  ? "text-gray-300 hover:bg-slate-700"
                  : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              <div className="flex items-center gap-3">
                <GrAction />
                {!collapsed && <span>Component Master</span>}
              </div>
              {!collapsed && (
                <ChevronDownIcon
                  className={`w-4 h-4 transition ${open ? "rotate-180" : ""
                    }`}
                />
              )}
            </Disclosure.Button>

            {!collapsed && (
              <Disclosure.Panel className="ml-6 space-y-1">
                <Item
                  href="/projects/peminjaman/admin/component-master/master-barang"
                  icon={<GrAction />}
                  label="Master Barang"
                />
                <Item
                  href="/projects/peminjaman/admin/component-master/master-satuan"
                  icon={<GrAction />}
                  label="Master Satuan"
                />
                <Item
                  href="/projects/peminjaman/admin/component-master/master-kategori"
                  icon={<GrAction />}
                  label="Master Kategori"
                />
              </Disclosure.Panel>
            )}
          </>
        )}
      </Disclosure>

      <Item
        href="/projects/peminjaman/admin/list-barang"
        icon={<GrList />}
        label="List Barang"
      />

      {/* PEMINJAMAN */}
      <Disclosure defaultOpen={isPeminjamanRoute}>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`flex w-full items-center justify-between px-3 py-2 rounded-md transition-colors
                ${dark
                  ? "text-gray-300 hover:bg-slate-700"
                  : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              <div className="flex items-center gap-3">
                <GrHadoop />
                {!collapsed && <span>Peminjaman Alat</span>}
              </div>
              {!collapsed && (
                <ChevronDownIcon
                  className={`w-4 h-4 transition ${open ? "rotate-180" : ""
                    }`}
                />
              )}
            </Disclosure.Button>

            {!collapsed && (
              <Disclosure.Panel className="ml-6 space-y-1">
                <Item
                  href="/projects/peminjaman/admin/semua"
                  icon={<GrHadoop />}
                  label="Semua Peminjaman"
                />
                <Item
                  href="/projects/peminjaman/admin/dipinjam"
                  icon={<GrHadoop />}
                  label="Sedang Dipinjam"
                />
                <Item
                  href="/projects/peminjaman/admin/menunggu-pengembalian"
                  icon={<GrHadoop />}
                  label="Menunggu Pengembalian"
                />
                <Item
                  href="/projects/peminjaman/admin/dikembalikan"
                  icon={<GrHadoop />}
                  label="Dikembalikan"
                />
                <Item
                  href="/projects/peminjaman/admin/ditolak"
                  icon={<GrHadoop />}
                  label="Ditolak"
                />
              </Disclosure.Panel>
            )}
          </>
        )}
      </Disclosure>

      {/* BACK (EXACT ONLY) */}
      <Item
        href="/projects/peminjaman"
        icon={<FaArrowAltCircleLeft />}
        label="Back"
        exact
      />
    </aside>
  );
}
