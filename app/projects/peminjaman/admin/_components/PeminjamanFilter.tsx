"use client";

export default function PeminjamanFilter() {
  return (
    <div className="flex gap-3">
      <input
        placeholder="Cari peminjam / barang"
        className="px-3 py-2 text-sm rounded-lg"
        style={{
          border: "1px solid var(--border)",
          background: "var(--bg-card)",
          color: "var(--text-primary)",
        }}
      />

      <select
        className="px-3 py-2 text-sm rounded-lg"
        style={{
          border: "1px solid var(--border)",
          background: "var(--bg-card)",
          color: "var(--text-primary)",
        }}
      >
        <option value="">Semua Status</option>
        <option value="pending">Pending</option>
        <option value="approved">Approved</option>
        <option value="rejected">Rejected</option>
        <option value="dikembalikan">Dikembalikan</option>
      </select>
    </div>
  );
}
