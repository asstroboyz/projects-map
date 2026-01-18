"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Disclosure } from "@headlessui/react";
import {
  ChevronDownIcon,
  LayoutDashboard,
  Users,
  Boxes,
  Package,
} from "lucide-react";

type Props = {
  collapsed: boolean;
};

export default function Sidebar({ collapsed }: Props) {
  const pathname = usePathname();

  const Item = ({
    href,
    label,
    icon,
  }: {
    href: string;
    label: string;
    icon: JSX.Element;
  }) => {
    const active = pathname === href;

    return (
      <Link
        href={href}
        className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition
          ${
            active
              ? "bg-yellow-500 text-black"
              : "text-slate-200 hover:bg-slate-700"
          }`}
      >
        {icon}
        {!collapsed && <span>{label}</span>}
      </Link>
    );
  };

  return (
    <aside
      className={`min-h-screen transition-all
        ${collapsed ? "w-16" : "w-64"}
        bg-slate-800 text-white
      `}
    >
      {/* LOGO */}
      <div className="h-14 flex items-center justify-center border-b border-slate-700">
        <span className="font-bold text-yellow-400">
          {collapsed ? "LE" : "LAB ESAE"}
        </span>
      </div>

      <nav className="p-3 space-y-1">
        <Item
          href="/projects/peminjaman/admin/dashboard"
          label="Dashboard"
          icon={<LayoutDashboard size={18} />}
        />

        <Item
          href="/projects/peminjaman/admin/manage-users"
          label="Manage Users"
          icon={<Users size={18} />}
        />

        {!collapsed && (
          <p className="mt-4 mb-2 text-xs text-yellow-400">
            INTERFACE
          </p>
        )}

        <Disclosure defaultOpen={pathname.includes("/component-master")}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-slate-700">
                <div className="flex items-center gap-3">
                  <Boxes size={18} />
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
                    label="Master Barang"
                    icon={<Package size={16} />}
                  />
                  <Item
                    href="/projects/peminjaman/admin/component-master/master-satuan"
                    label="Master Satuan"
                    icon={<Package size={16} />}
                  />
                  <Item
                    href="/projects/peminjaman/admin/component-master/master-kategori"
                    label="Master Kategori"
                    icon={<Package size={16} />}
                  />
                </Disclosure.Panel>
              )}
            </>
          )}
        </Disclosure>
      </nav>
    </aside>
  );
}
