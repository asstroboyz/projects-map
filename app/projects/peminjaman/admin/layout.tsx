"use client";

import { useEffect, useState, ReactNode } from "react";
import Sidebar from "./_components/Sidebar";
import Header from "./_components/Header";

export default function AdminPeminjamanLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);

  // 🔹 apply theme from localStorage on mount
  useEffect(() => {
    const theme = localStorage.getItem("theme") || "dark";
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, []);

  // 🔹 toggle theme (SINGLE SOURCE OF TRUTH = <html>)
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "light" : "dark");
  };

  return (
    <div className="min-h-screen flex bg-slate-100 dark:bg-slate-900 transition-colors duration-300">
      <Sidebar collapsed={collapsed} />

      <div className="flex-1 flex flex-col">
        <Header
          collapsed={collapsed}
          onToggleSidebar={() => setCollapsed(!collapsed)}
          onToggleDark={toggleTheme}
        />

        <main className="p-6 max-w-[1440px] mx-auto w-full text-slate-800 dark:text-slate-200 transition-colors duration-300">
          {children}
        </main>
      </div>
    </div>
  );
}
