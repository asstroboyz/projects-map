"use client";

import { useEffect, useState } from "react";
import {
  getAll,
  seedIfEmpty,
  updateStatus,
} from "../../lib/peminjamanCache";

export default function PeminjamanTable() {
  const [rows, setRows] = useState<any[]>([]);

  useEffect(() => {
    seedIfEmpty();
    setRows(getAll());
  }, []);

  const action = (id: number, status: string) => {
    updateStatus(id, status as any);
    setRows(getAll());
  };

  const badgeStyle = (status: string) => {
    if (status === "pending")
      return { background: "#ffeaa7", color: "#000" };
    if (status === "approved")
      return { background: "#55efc4", color: "#000" };
    if (status === "rejected")
      return { background: "#ff7675", color: "#000" };
    return {};
  };

  return (
    <div
      className="rounded-xl"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
      }}
    >
      <div
        className="p-4 font-semibold"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        Daftar Peminjaman
      </div>

      <table className="w-full text-sm">
        <thead>
          <tr
            style={{
              borderBottom: "1px solid var(--border)",
              color: "var(--text-muted)",
            }}
          >
            <th className="p-3 text-left">Kode</th>
            <th className="p-3">Peminjam</th>
            <th className="p-3">Barang</th>
            <th className="p-3">Status</th>
            <th className="p-3" />
          </tr>
        </thead>

        <tbody>
          {rows.map((r) => (
            <tr
              key={r.id}
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              <td className="p-3">{r.kode}</td>
              <td className="p-3">{r.peminjam}</td>
              <td className="p-3">{r.barang}</td>
              <td className="p-3">
                <span
                  className="px-2 py-1 rounded-full text-xs font-semibold"
                  style={badgeStyle(r.status)}
                >
                  {r.status}
                </span>
              </td>
              <td className="p-3 text-right space-x-2">
                {r.status === "pending" && (
                  <>
                    <button
                      onClick={() => action(r.id, "approved")}
                      className="font-medium"
                      style={{ color: "#16a34a" }}
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => action(r.id, "rejected")}
                      className="font-medium"
                      style={{ color: "#dc2626" }}
                    >
                      Reject
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
