import { User } from "../admin/manage-users/page";
import GroupBadge from "./GroupBadge";


export default function UserDetailModal({
  user,
  onClose,
}: {
  user: User;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-lg p-6 space-y-4">
        <h3 className="text-lg font-semibold">Detail User</h3>

        <div>
          <p className="text-sm text-gray-500">Nama</p>
          <p className="font-medium">{user.name}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Email</p>
          <p className="font-medium">{user.email}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Group</p>
          <div className="flex gap-2 mt-1">
            {user.groups.map((g) => (
              <GroupBadge key={g} label={g} />
            ))}
          </div>
        </div>

        <div className="pt-4 text-right">
          <button onClick={onClose} className="px-4 py-2 border rounded">
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
