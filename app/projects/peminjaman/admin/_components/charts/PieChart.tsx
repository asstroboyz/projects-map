// _components/charts/PieChart.tsx
"use client";

type Props = {
  label: string;
  value: number;
};

export default function PieChart({ label, value }: Props) {
  return (
    <div className="flex flex-col items-center justify-center h-48">
      <div className="w-32 h-32 rounded-full bg-indigo-500 flex items-center justify-center text-white">
        <div className="text-center">
          <p className="font-semibold">{label}</p>
          <p className="text-sm opacity-80">{value} item</p>
        </div>
      </div>
    </div>
  );
}
