"use client";

import { useState } from "react";
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

export default function AdminPeminjamanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [dark, setDark] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  const Item = ({
    href,
    icon,
    label,
  }: {
    href: string;
    icon: React.ReactNode;
    label: string;
  }) => (
    <Link
      href={href}
      className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition
        ${
          isActive(href)
            ? dark
              ? "bg-[#283044] text-yellow-400"
              : "bg-yellow-100 text-yellow-700"
            : dark
            ? "hover:bg-[#283044] text-gray-200"
            : "hover:bg-gray-100 text-gray-700"
        }`}
    >
      <span className="text-lg">{icon}</span>
      {!collapsed && <span>{label}</span>}
    </Link>
  );

  return (
    <div
      className={`min-h-screen ${dark ? "dark" : ""}`}
      style={{
        backgroundColor: dark ? "#0f172a" : "#f8fafc",
        color: dark ? "#e5e7eb" : "#0f172a",
      }}
    >
      <div className="flex min-h-screen">
        {/* SIDEBAR */}
        <aside
          className={`transition-all duration-300 ${
            collapsed ? "w-16" : "w-64"
          }`}
          style={{
            background: dark ? "#222a35" : "#ffffff",
            borderRight: dark
              ? "2px solid #FFC10766"
              : "1px solid #e5e7eb",
          }}
        >
          {/* BRAND */}
          <div className="flex items-center justify-between px-3 py-4">
            {!collapsed && (
              <span className="font-semibold text-yellow-400">
                LAB ESAE
              </span>
            )}
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="text-sm px-2 py-1 rounded border"
            >
              {collapsed ? "➡" : "⬅"}
            </button>
          </div>

          {/* MAIN */}
          <Item
            href="/projects/peminjaman/admin/dashboard"
            icon={<GrDashboard />}
            label="Dashboard"
          />
          <Item
            href="/projects/peminjaman/admin/manage-users"
            icon={<GrUserAdmin />}
            label="Manage Users"
          />

          {!collapsed && (
            <div className="px-4 mt-4 text-xs font-semibold text-yellow-400">
              INTERFACE
            </div>
          )}

          {/* COMPONENT MASTER */}
          <Disclosure
            defaultOpen={pathname.includes("/component-master")}
          >
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={`flex w-full items-center justify-between px-3 py-2 rounded-md transition
                    ${
                      open
                        ? dark
                          ? "bg-[#283044]"
                          : "bg-gray-100"
                        : ""
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <GrAction />
                    {!collapsed && <span>Component Master</span>}
                  </div>
                  {!collapsed && (
                    <ChevronDownIcon
                      className={`w-4 h-4 transition ${
                        open ? "rotate-180" : ""
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

          {!collapsed && (
            <div className="px-4 mt-4 text-xs font-semibold text-yellow-400">
              KELOLA
            </div>
          )}

          {/* PEMINJAMAN */}
          <Disclosure
            defaultOpen={pathname.includes("/admin/")}
          >
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={`flex w-full items-center justify-between px-3 py-2 rounded-md transition
                    ${
                      open
                        ? dark
                          ? "bg-[#283044]"
                          : "bg-gray-100"
                        : ""
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <GrHadoop />
                    {!collapsed && <span>Peminjaman Alat</span>}
                  </div>
                  {!collapsed && (
                    <ChevronDownIcon
                      className={`w-4 h-4 transition ${
                        open ? "rotate-180" : ""
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
        </aside>

        {/* CONTENT */}
        <div className="flex-1 flex flex-col">
          {/* HEADER */}
          <header
            className="flex items-center justify-between px-6 py-4 bg-white"
            style={{
              borderBottom: "1px solid #e5e7eb",
            }}
          >
            <h1 className="text-lg font-semibold">
              Manajemen Peminjaman
            </h1>
            <button
              onClick={() => setDark(!dark)}
              className="px-3 py-1 rounded text-sm border"
            >
              {dark ? "☀ Light" : "🌙 Dark"}
            </button>
          </header>

          <main className="p-6 flex-1">{children}</main>
        </div>
      </div>
    </div>
  );
}
