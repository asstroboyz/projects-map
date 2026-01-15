"use client";

import { useEffect, useState } from "react";

type Barang = {
    id: number;
    kode: string;
    nama: string;
    stok: number;
    satuan: string;
};

export default function BarangPage() {
    const [items, setItems] = useState<Barang[]>([]);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);

    const PAGE_SIZE = 5;

    // ====== DUMMY DATA GENERATOR ======
    function generateBarang(total: number): Barang[] {
        const satuanList = ["pcs", "rim", "unit", "box", "pack"];

        return Array.from({ length: total }, (_, i) => {
            const stok = Math.floor(Math.random() * 150);

            return {
                id: i + 1,
                kode: `ATK-${String(i + 1).padStart(3, "0")}`,
                nama: `Barang ATK ${i + 1}`,
                stok,
                satuan: satuanList[i % satuanList.length],
            };
        });
    }

    useEffect(() => {
        setItems(generateBarang(57));
    }, []);

    // ====== FILTER (SEARCH) ======
    const filteredItems = items.filter((item) => {
        const q = search.toLowerCase();
        return (
            item.nama.toLowerCase().includes(q) ||
            item.kode.toLowerCase().includes(q) ||
            item.satuan.toLowerCase().includes(q)
        );
    });

    // ====== PAGINATION ======
    const totalPages = Math.ceil(filteredItems.length / PAGE_SIZE);

    const paginatedItems = filteredItems.slice(
        (page - 1) * PAGE_SIZE,
        page * PAGE_SIZE
    );

    const pagesToShow = [page - 1, page, page + 1].filter(
        (p) => p >= 1 && p <= totalPages
    );



    type ModalType = "tambah" | "tambah-stok" | "kurang-stok" | "hapus" | null;

    const [modal, setModal] = useState<ModalType>(null);
    const [selectedItem, setSelectedItem] = useState<Barang | null>(null);
    const [qty, setQty] = useState(0);
    const [newBarang, setNewBarang] = useState({
        nama: "",
        satuan: "pcs",
        stok: 0,
    });

    function handleConfirm() {
        if (!modal) return;
        if (modal === "tambah") {
            setItems((prev) => [
                {
                    id: prev.length ? prev[prev.length - 1].id + 1 : 1,
                    kode: `ATK-${String(prev.length + 1).padStart(3, "0")}`,
                    nama: newBarang.nama,
                    satuan: newBarang.satuan,
                    stok: newBarang.stok,
                },
                ...prev,
            ]);

            setNewBarang({
                nama: "",
                satuan: "pcs",
                stok: 0,
            });
        }

        if (modal === "tambah-stok" && selectedItem) {
            setItems((prev) =>
                prev.map((i) =>
                    i.id === selectedItem.id
                        ? { ...i, stok: i.stok + qty }
                        : i
                )
            );
        }

        if (modal === "kurang-stok" && selectedItem) {
            setItems((prev) =>
                prev.map((i) =>
                    i.id === selectedItem.id
                        ? { ...i, stok: Math.max(0, i.stok - qty) }
                        : i
                )
            );
        }

        if (modal === "hapus" && selectedItem) {
            setItems((prev) => prev.filter((i) => i.id !== selectedItem.id));
        }

        // reset
        setModal(null);
        setSelectedItem(null);
        setQty(0);
    }

    return (
        <section className="space-y-6 text-black">
            {/* HEADER PAGE */}
            <div>
                <h1 className="text-3xl font-semibold">Daftar Barang</h1>
                <p className="text-sm mt-1">Manajemen data barang inventaris</p>
            </div>

            {/* CARD */}
            <div className="rounded-lg border shadow-sm bg-white">
                {/* CARD HEADER */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b px-6 py-4">
                    <h3 className="text-lg font-semibold">Daftar Barang</h3>

                    <div className="flex items-center gap-2">
                        {/* SEARCH */}
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                                setPage(1);
                            }}
                            placeholder="Cari barang..."
                            className="rounded-md border border-slate-400 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-sky-500"
                        />

                        <button onClick={() => setModal("tambah")} className="rounded-md bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700">
                            + Tambah Barang
                        </button>

                        <button className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700">
                            Cetak
                        </button>
                    </div>
                </div>

                {/* TABLE */}
                <div className="overflow-x-auto p-6">
                    <table className="w-full border text-sm">
                        <thead className="bg-slate-100">
                            <tr>
                                <th className="border px-3 py-2 text-left">No</th>
                                <th className="border px-3 py-2 text-left">Nama Barang</th>
                                <th className="border px-3 py-2 text-left">Satuan</th>
                                <th className="border px-3 py-2 text-left">Stok</th>
                                <th className="border px-3 py-2 text-left">Opsi</th>
                            </tr>
                        </thead>

                        <tbody>
                            {paginatedItems.length > 0 ? (
                                paginatedItems.map((item, index) => {
                                    const stokRendah = item.stok < 10;

                                    return (
                                        <tr key={item.id} className="hover:bg-slate-50">
                                            <td className="border px-3 py-2">
                                                {(page - 1) * PAGE_SIZE + index + 1}
                                            </td>

                                            <td className="border px-3 py-2 font-medium">
                                                {item.nama}
                                            </td>

                                            <td className="border px-3 py-2">
                                                {item.satuan}
                                            </td>

                                            <td className="border px-3 py-2">
                                                {stokRendah ? (
                                                    <span className="inline-block rounded bg-rose-600 px-3 py-1 text-xs font-semibold text-white">
                                                        {item.stok}
                                                    </span>
                                                ) : (
                                                    item.stok
                                                )}
                                            </td>

                                            <td className="border px-3 py-2">
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={() => {
                                                            setSelectedItem(item);
                                                            setModal("tambah-stok");
                                                        }}
                                                        className="rounded bg-emerald-600 px-3 py-1 text-xs text-white"
                                                    >
                                                        + Tambah
                                                    </button>

                                                    <button
                                                        onClick={() => {
                                                            setSelectedItem(item);
                                                            setModal("kurang-stok");
                                                        }}
                                                        className="rounded bg-amber-500 px-3 py-1 text-xs text-white"
                                                    >
                                                        − Kurang
                                                    </button>

                                                    <button
                                                        onClick={() => {
                                                            setSelectedItem(item);
                                                            setModal("hapus");
                                                        }}
                                                        className="rounded bg-rose-600 px-3 py-1 text-xs text-white"
                                                    >
                                                        Hapus
                                                    </button>

                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })
                            ) : (
                                <tr>
                                    <td colSpan={5} className="border px-3 py-6 text-center text-slate-500">
                                        Data belum ada.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                    {/* INFO + PAGINATION */}
                    <div className="mt-4 flex items-center justify-between">
                        <p className="text-sm text-slate-600">
                            Menampilkan {paginatedItems.length} dari {filteredItems.length} data
                        </p>

                        <div className="flex gap-1">
                            <button
                                disabled={page === 1}
                                onClick={() => setPage(page - 1)}
                                className="rounded-md border border-slate-400 px-3 py-1 text-sm font-medium text-slate-700 hover:bg-slate-100 disabled:opacity-30"
                            >
                                Prev
                            </button>

                            {pagesToShow.map((p) => (
                                <button
                                    key={p}
                                    onClick={() => setPage(p)}
                                    className={`rounded-md border px-3 py-1 text-sm font-medium ${p === page
                                        ? "bg-slate-900 text-white border-slate-900"
                                        : "border-slate-400 text-slate-700 hover:bg-slate-100"
                                        }`}
                                >
                                    {p}
                                </button>
                            ))}

                            <button
                                disabled={page === totalPages}
                                onClick={() => setPage(page + 1)}
                                className="rounded-md border border-slate-400 px-3 py-1 text-sm font-medium text-slate-700 hover:bg-slate-100 disabled:opacity-30"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* MODAL BACKDROP */}
            {modal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                    <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">

                        {/* HEADER */}
                        <h3 className="text-lg font-semibold mb-4">
                            {modal === "tambah" && "Tambah Barang"}
                            {modal === "tambah-stok" && "Tambah Stok"}
                            {modal === "kurang-stok" && "Kurang Stok"}
                            {modal === "hapus" && "Hapus Barang"}
                        </h3>

                        {/* BODY */}
                        {modal === "tambah" && (
                            <div className="space-y-3">
                                <div>
                                    <label className="text-sm font-medium">Nama Barang</label>
                                    <input
                                        value={newBarang.nama}
                                        onChange={(e) =>
                                            setNewBarang({ ...newBarang, nama: e.target.value })
                                        }
                                        className="w-full border px-3 py-2 rounded"
                                        placeholder="Nama barang"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm font-medium">Satuan</label>
                                    <select
                                        value={newBarang.satuan}
                                        onChange={(e) =>
                                            setNewBarang({ ...newBarang, satuan: e.target.value })
                                        }
                                        className="w-full border px-3 py-2 rounded"
                                    >
                                        <option value="pcs">pcs</option>
                                        <option value="rim">rim</option>
                                        <option value="unit">unit</option>
                                        <option value="box">box</option>
                                        <option value="pack">pack</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="text-sm font-medium">Stok Awal</label>
                                    <input
                                        type="number"
                                        min={0}
                                        value={newBarang.stok}
                                        onChange={(e) =>
                                            setNewBarang({
                                                ...newBarang,
                                                stok: Number(e.target.value),
                                            })
                                        }
                                        className="w-full border px-3 py-2 rounded"
                                    />
                                </div>
                            </div>
                        )}


                        {(modal === "tambah-stok" || modal === "kurang-stok") && (
                            <div className="space-y-2">
                                <p className="text-sm">
                                    Barang: <b>{selectedItem?.nama}</b>
                                </p>
                                <input
                                    type="number"
                                    value={qty}
                                    onChange={(e) => setQty(Number(e.target.value))}
                                    className="w-full border px-3 py-2 rounded"
                                    placeholder="Jumlah"
                                />
                            </div>
                        )}

                        {modal === "hapus" && (
                            <p className="text-sm">
                                Yakin hapus <b>{selectedItem?.nama}</b>?
                            </p>
                        )}

                        {/* FOOTER */}
                        <div className="mt-6 flex justify-end gap-2">
                            <button
                                onClick={() => {
                                    setModal(null);
                                    setQty(0);
                                    setSelectedItem(null);
                                    setNewBarang({
                                        nama: "",
                                        satuan: "pcs",
                                        stok: 0,
                                    });
                                }}
                                className="rounded border px-4 py-2 text-sm"
                            >
                                Batal
                            </button>

                            <button
                                onClick={() => handleConfirm()}
                                className={`rounded px-4 py-2 text-sm text-white ${modal === "hapus"
                                    ? "bg-rose-600"
                                    : "bg-sky-600"
                                    }`}
                            >
                                Simpan
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </section>
    );
}
