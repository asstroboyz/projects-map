"use client";

import { useState } from "react";
import UserTable from "../../_components/UserTable";
import UserFormModal from "../../_components/UserFormModal";
import UserDetailModal from "../../_components/UserDetailModal";

export type User = {
  id: number;
  name: string;
  email: string;
  groups: string[];
  status: "active" | "inactive";
};

const MOCK_USERS: User[] = [
  {
    id: 1,
    name: "Administrator",
    email: "admin@labesae.id",
    groups: ["Admin", "Superuser"],
    status: "active",
  },
  {
    id: 2,
    name: "Petugas Gudang",
    email: "gudang@labesae.id",
    groups: ["Petugas"],
    status: "active",
  },
];

export default function ManageUsersPage() {
  const [users, setUsers] = useState<User[]>(MOCK_USERS);
  const [selected, setSelected] = useState<User | null>(null);
  const [openForm, setOpenForm] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);

  const handleSave = (user: User) => {
    setUsers((prev) => {
      const exist = prev.find((u) => u.id === user.id);
      if (exist) {
        return prev.map((u) => (u.id === user.id ? user : u));
      }
      return [...prev, { ...user, id: Date.now() }];
    });
    setOpenForm(false);
  };

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Manage Users</h2>
        <button
          onClick={() => {
            setSelected(null);
            setOpenForm(true);
          }}
          className="px-4 py-2 rounded bg-yellow-500 text-white hover:bg-yellow-600"
        >
          + Tambah User
        </button>
      </div>

      {/* TABLE */}
      <UserTable
        users={users}
        onDetail={(u) => {
          setSelected(u);
          setOpenDetail(true);
        }}
        onEdit={(u) => {
          setSelected(u);
          setOpenForm(true);
        }}
      />

      {/* MODALS */}
      {openForm && (
        <UserFormModal
          user={selected}
          onClose={() => setOpenForm(false)}
          onSave={handleSave}
        />
      )}

      {openDetail && selected && (
        <UserDetailModal
          user={selected}
          onClose={() => setOpenDetail(false)}
        />
      )}
    </div>
  );
}
