"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "lucide-react";


export default function Sidebar() {
  const pathname = usePathname();

  const Item = ({ href, label }: { href: string; label: string }) => {
    const active = pathname === href;
    return (
      <Link
        href={href}
        className={`block px-4 py-2 rounded-md text-sm transition
          ${active ? "bg-yellow-500 text-black" : "text-white hover:bg-slate-700"}`}
      >
        {label}
      </Link>
    );
  };

  return (
    <aside className="w-64 bg-[#222a35] text-white min-h-screen p-4 space-y-4">
      <div className="text-center font-bold text-yellow-400 text-lg">
        LAB ESAE
      </div>

      <Item href="/projects/peminjaman/admin/dashboard" label="Dashboard" />
      <Item href="/projects/peminjaman/admin/manage-users" label="Manage Users" />

      {/* INTERFACE */}
      <div className="mt-4">
        <p className="text-yellow-400 text-xs mb-2">INTERFACE</p>

        <Disclosure
          defaultOpen={pathname.includes("/component-master")}
        >
          {({ open }) => (
            <>
              <Disclosure.Button
                className="flex w-full items-center justify-between px-4 py-2 rounded-md hover:bg-slate-700"
              >
                <span>Component Master</span>
                <ChevronDownIcon
                  className={`w-4 h-4 transition ${open ? "rotate-180" : ""}`}
                />
              </Disclosure.Button>

              <Disclosure.Panel className="ml-4 space-y-1">
                <Item
                  href="/projects/peminjaman/admin/component-master/master-barang"
                  label="Master Barang"
                />
                <Item
                  href="/projects/peminjaman/admin/component-master/master-satuan"
                  label="Master Satuan"
                />
                <Item
                  href="/projects/peminjaman/admin/component-master/master-kategori"
                  label="Master Kategori"
                />
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Item
          href="/projects/peminjaman/admin/list-barang"
          label="List Barang"
        />
      </div>

      {/* KELOLA */}
      <div className="mt-4">
        <p className="text-yellow-400 text-xs mb-2">KELOLA</p>

        <Disclosure
          defaultOpen={pathname.includes("/admin/")}
        >
          {({ open }) => (
            <>
              <Disclosure.Button
                className="flex w-full items-center justify-between px-4 py-2 rounded-md hover:bg-slate-700"
              >
                <span>Peminjaman Alat</span>
                <ChevronDownIcon
                  className={`w-4 h-4 transition ${open ? "rotate-180" : ""}`}
                />
              </Disclosure.Button>

              <Disclosure.Panel className="ml-4 space-y-1">
                <Item href="/projects/peminjaman/admin/semua" label="Semua Peminjaman" />
                <Item href="/projects/peminjaman/admin/pengajuan" label="Pengajuan" />
                <Item href="/projects/peminjaman/admin/dipinjam" label="Sedang Dipinjam" />
                <Item href="/projects/peminjaman/admin/menunggu-pengembalian" label="Menunggu Pengembalian" />
                <Item href="/projects/peminjaman/admin/dikembalikan" label="Dikembalikan" />
                <Item href="/projects/peminjaman/admin/ditolak" label="Ditolak" />
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </aside>
  );
}
