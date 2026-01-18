import { useState } from "react";
import { User } from "../admin/manage-users/page";

const ALL_GROUPS = ["Admin", "Superuser", "Petugas", "Viewer"];

export default function UserFormModal({
  user,
  onClose,
  onSave,
}: {
  user: User | null;
  onClose: () => void;
  onSave: (u: User) => void;
}) {
  const [form, setForm] = useState<User>({
    id: user?.id || 0,
    name: user?.name || "",
    email: user?.email || "",
    groups: user?.groups || [],
    status: user?.status || "active",
  });

  const toggleGroup = (g: string) => {
    setForm((prev) => ({
      ...prev,
      groups: prev.groups.includes(g)
        ? prev.groups.filter((x) => x !== g)
        : [...prev.groups, g],
    }));
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-lg p-6 space-y-4">
        <h3 className="text-lg font-semibold">
          {user ? "Edit User" : "Tambah User"}
        </h3>

        <input
          placeholder="Nama"
          className="w-full border rounded px-3 py-2"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Email"
          className="w-full border rounded px-3 py-2"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <div>
          <p className="text-sm font-medium mb-2">Group User</p>
          <div className="flex flex-wrap gap-2">
            {ALL_GROUPS.map((g) => (
              <button
                key={g}
                onClick={() => toggleGroup(g)}
                className={`px-3 py-1 rounded border text-sm ${
                  form.groups.includes(g)
                    ? "bg-yellow-500 text-white"
                    : ""
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-2 pt-4">
          <button onClick={onClose} className="px-4 py-2 border rounded">
            Batal
          </button>
          <button
            onClick={() => onSave(form)}
            className="px-4 py-2 bg-yellow-500 text-white rounded"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
}
