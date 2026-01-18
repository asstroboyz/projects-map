"use client";

import { useState } from "react";
import AdminSidebar from "./Sidebar";
import AdminHeader from "./Header";

export default function AdminShell({
  children,
  dark,
  setDark,
}: {
  children: React.ReactNode;
  dark: boolean;
  setDark: (v: boolean) => void;
}) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`min-h-screen flex ${
        dark ? "bg-slate-950 text-slate-100" : "bg-white text-slate-900"
      }`}
    >
      <AdminSidebar
        dark={dark}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />

      <div className="flex-1 flex flex-col">
        <AdminHeader dark={dark} setDark={setDark} />
        <main className="p-6 flex-1">{children}</main>
      </div>
    </div>
  );
}
