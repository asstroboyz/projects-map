export default function GroupBadge({ label }: { label: string }) {
  return (
    <span className="px-2 py-1 text-xs rounded bg-blue-100 text-blue-700">
      {label}
    </span>
  );
}
