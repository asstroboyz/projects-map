import {
  GrCalendar,
  GrCheckmark,
  GrClose,
  GrInProgress,
} from "react-icons/gr";
import type { DashboardData } from "./useDashboardData";
import { ReactNode } from "react";

type Props = {
  data: DashboardData;
};

export default function PeminjamanStats({ data }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
      <Stat
        title="Sedang Dipinjam"
        value={data.sedangDipinjam}
        icon={<GrInProgress />}
      />
      <Stat
        title="Dikembalikan"
        value={data.dikembalikan}
        icon={<GrCheckmark />}
      />
      <Stat
        title="Rusak / Hilang"
        value={data.rusak}
        icon={<GrClose />}
      />
      <Stat
        title="Hari Ini"
        value={data.tanggal}
        icon={<GrCalendar />}
      />
    </div>
  );
}

/* ================= SUB COMPONENT ================= */

type StatProps = {
  title: string;
  value: number | string;
  icon: ReactNode;
};

function Stat({ title, value, icon }: StatProps) {
  return (
    <div className="bg-white rounded-xl p-5 border shadow-sm">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-xs uppercase text-slate-500">
            {title}
          </p>
          <p className="text-3xl font-semibold text-slate-800">
            {value}
          </p>
        </div>
        <div className="text-2xl text-slate-400">
          {icon}
        </div>
      </div>
    </div>
  );
}
