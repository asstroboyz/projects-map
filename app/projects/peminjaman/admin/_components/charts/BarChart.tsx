// _components/charts/BarChart.tsx
"use client";

type BarItem = {
  label: string;
  value: number;
};

type Props = {
  data: BarItem[];
};

export default function BarChart({ data }: Props) {
  if (!data.length) {
    return (
      <div className="h-48 flex items-center justify-center text-sm text-slate-400">
        Tidak ada data
      </div>
    );
  }

  const max = Math.max(...data.map(d => d.value));

  return (
    <div className="h-48 flex items-end gap-6">
      {data.map((item) => {
        const height = (item.value / max) * 100;

        return (
          <div
            key={item.label}
            className="flex-1 flex flex-col items-center justify-end"
          >
            <div
              className="w-10 bg-indigo-500 rounded-t-md transition-all"
              style={{ height: `${Math.max(height, 12)}%` }}
            />
            <p className="text-xs mt-2 text-slate-400 text-center">
              {item.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}
