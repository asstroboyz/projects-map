"use client";

import { useEffect, useState } from "react";
import { getAll, seedIfEmpty } from "../../lib/peminjamanCache";

export default function PeminjamanStats() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    seedIfEmpty();
    setData(getAll());
  }, []);

  const count = (status: string) =>
    data.filter((d) => d.status === status).length;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Stat label="Total" value={data.length} />
      <Stat label="Pending" value={count("pending")} />
      <Stat label="Approved" value={count("approved")} />
      <Stat label="Rejected" value={count("rejected")} />
    </div>
  );
}

function Stat({ label, value }: any) {
  return (
    <div
      className="rounded-xl p-4"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
      }}
    >
      <p
        className="text-sm"
        style={{ color: "var(--text-muted)" }}
      >
        {label}
      </p>
      <p
        className="text-2xl font-bold"
        style={{ color: "var(--text-primary)" }}
      >
        {value}
      </p>
    </div>
  );
}
