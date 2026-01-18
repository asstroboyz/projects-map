"use client";

import { useState } from "react";

/* =======================
   TYPES
======================= */
type Barang = {
  id: number;
  kode: string;
  nama: string;
  kategori: string;
  stok: number;
  status: "tersedia" | "dipinjam";
};

/* =======================
   MOCK DATA
======================= */
const MOCK_BARANG: Barang[] = [
  {
    id: 1,
    kode: "BRG-001",
    nama: "Mikroskop",
    kategori: "Alat Lab",
    stok: 3,
    status: "tersedia",
  },
  {
    id: 2,
    kode: "BRG-002",
    nama: "Tabung Reaksi",
    kategori: "Peralatan",
    stok: 0,
    status: "dipinjam",
  },
  {
    id: 3,
    kode: "BRG-003",
    nama: "Centrifuge",
    kategori: "Mesin",
    stok: 1,
    status: "tersedia",
  },
];

/* =======================
   CHIP COMPONENT (INLINE)
======================= */
function ActionChip({
  label,
  variant,
  onClick,
}: {
  label: string;
  variant: "detail" | "edit";
  onClick: () => void;
}) {
  const base =
    "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium cursor-pointer transition";

  const style =
    variant === "detail"
      ? "bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-500/20 dark:text-blue-300 dark:hover:bg-blue-500/30"
      : "bg-yellow-100 text-yellow-700 hover:bg-yellow-200 dark:bg-yellow-500/20 dark:text-yellow-300 dark:hover:bg-yellow-500/30";

  return (
    <span onClick={onClick} className={`${base} ${style}`}>
      {label}
    </span>
  );
}

/* =======================
   PAGE
======================= */
export default function ListBarangPage() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState<Barang[]>(MOCK_BARANG);

  const [selected, setSelected] = useState<Barang | null>(null);
  const [mode, setMode] = useState<"detail" | "edit" | null>(null);

  const filtered = data.filter(
    (b) =>
      b.nama.toLowerCase().includes(query.toLowerCase()) ||
      b.kode.toLowerCase().includes(query.toLowerCase())
  );

  const closeModal = () => {
    setSelected(null);
    setMode(null);
  };

  const handleSave = () => {
    if (!selected) return;
    setData((prev) =>
      prev.map((b) => (b.id === selected.id ? selected : b))
    );
    closeModal();
  };

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">List Barang</h2>

        <input
          type="text"
          placeholder="Cari barang..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="px-3 py-2 text-sm rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-yellow-400"
        />
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto rounded border border-gray-200">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-black">
            <tr>
              <th className="px-4 py-2 text-left">Kode</th>
              <th className="px-4 py-2 text-left">Nama</th>
              <th className="px-4 py-2 text-left">Kategori</th>
              <th className="px-4 py-2 text-center">Stok</th>
              <th className="px-4 py-2 text-center">Status</th>
              <th className="px-4 py-2 text-center">Aksi</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((b) => (
              <tr
                key={b.id}
                className="
                  border-t
                  hover:bg-gray-50
                  dark:hover:bg-slate-800
                  hover:text-slate-900
                  dark:hover:text-slate-100
                "
              >
                <td className="px-4 py-2">{b.kode}</td>
                <td className="px-4 py-2 font-medium">{b.nama}</td>
                <td className="px-4 py-2">{b.kategori}</td>
                <td className="px-4 py-2 text-center">{b.stok}</td>
                <td className="px-4 py-2 text-center">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      b.status === "tersedia"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {b.status}
                  </span>
                </td>
                <td className="px-4 py-2 text-center space-x-2">
                  <ActionChip
                    label="Detail"
                    variant="detail"
                    onClick={() => {
                      setSelected(b);
                      setMode("detail");
                    }}
                  />
                  <ActionChip
                    label="Edit"
                    variant="edit"
                    onClick={() => {
                      setSelected({ ...b });
                      setMode("edit");
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {selected && mode && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-slate-900 rounded p-6 w-full max-w-md space-y-4">
            <h3 className="text-lg font-semibold capitalize">
              {mode} Barang
            </h3>

            {mode === "detail" ? (
              <div className="space-y-2 text-sm">
                <p><b>Kode:</b> {selected.kode}</p>
                <p><b>Nama:</b> {selected.nama}</p>
                <p><b>Kategori:</b> {selected.kategori}</p>
                <p><b>Stok:</b> {selected.stok}</p>
                <p><b>Status:</b> {selected.status}</p>
              </div>
            ) : (
              <div className="space-y-3 text-sm">
                <input
                  className="w-full px-3 py-2 border rounded"
                  value={selected.nama}
                  onChange={(e) =>
                    setSelected({ ...selected, nama: e.target.value })
                  }
                />
                <input
                  className="w-full px-3 py-2 border rounded"
                  value={selected.kategori}
                  onChange={(e) =>
                    setSelected({ ...selected, kategori: e.target.value })
                  }
                />
                <input
                  type="number"
                  className="w-full px-3 py-2 border rounded"
                  value={selected.stok}
                  onChange={(e) =>
                    setSelected({
                      ...selected,
                      stok: Number(e.target.value),
                    })
                  }
                />
                <select
                  className="w-full px-3 py-2 border rounded"
                  value={selected.status}
                  onChange={(e) =>
                    setSelected({
                      ...selected,
                      status: e.target.value as Barang["status"],
                    })
                  }
                >
                  <option value="tersedia">Tersedia</option>
                  <option value="dipinjam">Dipinjam</option>
                </select>
              </div>
            )}

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={closeModal}
                className="px-3 py-1 text-sm rounded border"
              >
                Tutup
              </button>
              {mode === "edit" && (
                <button
                  onClick={handleSave}
                  className="px-3 py-1 text-sm rounded bg-yellow-500 text-white"
                >
                  Simpan
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
