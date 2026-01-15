export type StatusPeminjaman =
  | "pending"
  | "approved"
  | "rejected"
  | "dikembalikan";

export interface Peminjaman {
  id: number;
  kode: string;
  peminjam: string;
  barang: string;
  jumlah: number;
  ruangan: string;
  tanggal_pinjam: string;
  tanggal_kembali: string;
  status: StatusPeminjaman;
}

const KEY = "PEMINJAMAN_DATA";

export function seedIfEmpty() {
  if (typeof window === "undefined") return;

  if (localStorage.getItem(KEY)) return;

  const seed: Peminjaman[] = Array.from({ length: 10 }).map((_, i) => ({
    id: i + 1,
    kode: `PINJAM-2025100${i + 1}`,
    peminjam: `User ${i + 1}`,
    barang: "Laptop Lenovo",
    jumlah: 1,
    ruangan: "Lab TKJ 1",
    tanggal_pinjam: "2025-10-01",
    tanggal_kembali: "2025-10-05",
    status: i % 3 === 0 ? "pending" : "approved",
  }));

  localStorage.setItem(KEY, JSON.stringify(seed));
}

export function getAll(): Peminjaman[] {
  const raw = localStorage.getItem(KEY);
  return raw ? JSON.parse(raw) : [];
}

export function updateStatus(id: number, status: StatusPeminjaman) {
  const data = getAll();
  const updated = data.map((d) =>
    d.id === id ? { ...d, status } : d
  );
  localStorage.setItem(KEY, JSON.stringify(updated));
}
