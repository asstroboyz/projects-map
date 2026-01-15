import Sidebar from "./_components/Sidebar";

export default function InventoryAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // nanti role diambil dari session / token
  const role = "admin"; // admin | gudang | pengadaan

  return (
    <div className="flex min-h-screen">
      <Sidebar role={role} />
      <main className="flex-1 p-6 bg-slate-50">
        {children}
      </main>
    </div>
  );
}
