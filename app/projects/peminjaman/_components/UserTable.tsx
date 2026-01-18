import { User } from "../admin/manage-users/page";
import GroupBadge from "./GroupBadge";

export default function UserTable({
  users,
  onEdit,
  onDetail,
}: {
  users: User[];
  onEdit: (u: User) => void;
  onDetail: (u: User) => void;
}) {
  return (
    <div className="overflow-x-auto bg-white dark:bg-slate-900 rounded-lg border">
      <table className="w-full text-sm">
        <thead className="bg-gray-100 dark:bg-slate-800">
          <tr>
            <th className="p-3 text-left">Nama</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Group</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id} className="border-t">
              <td className="p-3">{u.name}</td>
              <td className="p-3">{u.email}</td>
              <td className="p-3 space-x-1">
                {u.groups.map((g) => (
                  <GroupBadge key={g} label={g} />
                ))}
              </td>
              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded text-xs ${
                    u.status === "active"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {u.status}
                </span>
              </td>
              <td className="p-3 text-center space-x-2">
                <button
                  onClick={() => onDetail(u)}
                  className="text-blue-600 hover:underline"
                >
                  Detail
                </button>
                <button
                  onClick={() => onEdit(u)}
                  className="text-yellow-600 hover:underline"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
