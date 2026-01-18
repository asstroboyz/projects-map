// "use client";

// export default function Header() {
//   return (
//     <header className="h-14 bg-white border-b px-6 flex items-center justify-between">
//       <h1 className="font-semibold">Admin Panel</h1>
//       <div className="text-sm text-gray-600">Admin</div>
//     </header>
//   );
// }
"use client";

import { useEffect, useState } from "react";

export default function AdminHeader({
  dark,
  setDark,
}: {
  dark: boolean;
  setDark: (v: boolean) => void;
}) {
  // ✅ hydration guard
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <header
      className={`flex items-center justify-between px-6 py-4 border-b ${
        dark
          ? "bg-slate-900 border-slate-700"
          : "bg-white border-gray-200"
      }`}
    >
      <h1 className="text-lg font-semibold">Manajemen Peminjaman</h1>

      <button
        onClick={() => setDark(!dark)}
        className={`px-3 py-1 text-sm rounded border ${
          dark
            ? "border-slate-600 hover:bg-slate-700"
            : "border-gray-300 hover:bg-gray-100"
        }`}
      >
        {dark ? "☀ Light" : "🌙 Dark"}
      </button>
    </header>
  );
}

